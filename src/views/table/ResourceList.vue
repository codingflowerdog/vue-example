<template>
    <container>
        <v-data-table
            :headers="header"
            :items="data"
            :page.sync="offset"
            :items-per-page="limit"
            :server-items-length="totalCount"
            hide-default-footer
            class="elevation-3"
            @page-count="pageCount = $event"
            no-data-text="대상 데이터가 없습니다."
        >
            <!-- 상세보기 -->
            <template v-slot:item.detail="{ item }">
                <v-chip
                    class="ma-1"
                    color="green"
                    dark
                    small
                    @click="onDetailDialog(item.no)"
                >
                    상세보기
                </v-chip>
            </template>
        </v-data-table>
        <div class="text-center pt-2">
            <v-pagination
                v-model="offset"
                :length="pageCount"
                :total-visible="10"
                @input="console.debug(offset + ' 페이지 호출')"
            />
        </div>

        <!-- 스낵바 -->
        <SnackBar ref="snackbar"/>

        <!-- 다이얼로그 -->
        <v-dialog
            v-model="detailDialog"
            width="200px"
            :eager="true"
            @click:outside="detailDialog != detailDialog"
            @keydown:esc="detailDialog != detailDialog"
        >
            <v-sheet
                class="pa-5"
            >
                <ResourceDetail ref="resourceDetail"/>
            </v-sheet>
        </v-dialog>
    </container>
</template>

<script lang="ts">
import {Component, Ref} from "vue-property-decorator";
import Vue from "vue";
import {IResourceList} from "@/type/IResourceList";
import {getResources} from "@/api";
import SnackBar from "@/components/SnackBar.vue"
import ResourceDetail from "@/views/dialog/ResourceDetail.vue"
import {error} from "@/constant";
import {AxiosResponse} from "axios";

@Component({
    name: "ResourceList",
    components: {
        SnackBar,
        ResourceDetail
    }
})
export default class ResourceList extends Vue {
    // 다이얼로그 정보
    detailDialog = false;

    // 페이지네이션 정보
    offset = 0;
    limit = 10;
    pageCount = 0;
    totalCount = 0;

    // 테이블 헤더
    header = [{
        text: "리소스 번호",
        align: "start",
        sortable: false,
        value: "id"
    }, {
        text: "리소스명",
        value: "resourceName"
    }, {
        text: "UUID",
        value: "uuid"
    }, {
        text: "생성일",
        value: "createdDate"
    }, {
        text: "상세정보",
        value: "detail"
    }]

    // 테이블 데이터
    data: Array<IResourceList> = [];

    // 레퍼런스 초기화
    @Ref() snackbar!: SnackBar;
    @Ref() resourceDetail!: ResourceDetail;

    /**
     * 리소스 목록 조회
     */
    getResources(): void {
        getResources(this.offset, this.limit).then((res: AxiosResponse<any>) => {
            this.data = res.data;
        }).catch((err) => {
            console.error(err);
            this.snackbar.onSnackBar(error.ERR_GET_RESOURCES);
        })
    }

    /**
     * 상세 정보 다이얼로그 활성화
     * @param id 리소스 ID
     */
    onDetailDialog(id: number): void {
        this.detailDialog = true;
        this.resourceDetail.clear();
        this.resourceDetail.getResource(id);
    }


    mounted(): void {
        this.getResources();
    }
}
</script>

<style scoped>

</style>