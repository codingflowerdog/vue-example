<template>
    <container>
        <h3
            class="mb-2"
        >
            <v-list-item>
                <v-list-item-icon>
                    <v-icon style="vertical-align: middle" color="primary">info</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    리소스 정보
                </v-list-item-content>
            </v-list-item>
        </h3>

        <!-- 리소스 정보 -->
        <v-row>
            <v-col
                cols="12"
                sm="12"
            >
                <v-text-field
                    v-model="id"
                    label="리소스 ID"
                    readonly
                />
            </v-col>

            <v-col
                cols="12"
                sm="12"
            >
                <v-text-field
                    v-model="resourceName"
                    label="리소스 이름"
                    readonly
                />
            </v-col>

            <v-col
                cols="12"
                sm="12"
            >
                <v-text-field
                    v-model="uuid"
                    label="UUID"
                    readonly
                />
            </v-col>

            <v-col
                cols="12"
                sm="12"
            >
                <v-text-field
                    v-model="createdDate"
                    label="생성일"
                    readonly
                />
            </v-col>
        </v-row>

        <!-- 스낵바 -->
        <SnackBar ref="snackbar"/>
    </container>
</template>

<script lang="ts">
import {Component, Ref } from "vue-property-decorator";
import SnackBar from "@/components/SnackBar.vue"
import {error} from "@/constant";
import {getResource} from "@/api";
import {IResourceDetail} from "@/type/IResourceDetail";
import Vue from "vue";


@Component({
    name: "ResourceDetail",
    components: {
        SnackBar
    }
})
export default class ResourceDetail extends Vue {
    // 리소스 ID
    id = 0;

    // 리소스 이름
    resourceName = "";

    // UUID
    uuid = "";

    // 생성일
    createdDate = "";

    // 레퍼런스 초기화
    @Ref() readonly snackbar!: SnackBar;

    /**
     * 입력값 클리어
     */
    clear(): void {
        this.id = 0;
        this.resourceName = "";
        this.uuid = "";
    }

    /**
     * 리소스 생성
     * @param id 리소스 ID
     */
    getResource(id: number): void {
        getResource(id).then((res) => {
            // 리소스 정보 설정
            const resourceDetail: IResourceDetail = res.data;

            this.resourceName = resourceDetail.resourceName;
            this.id = resourceDetail.id;
            this.uuid = resourceDetail.uuid;
            this.createdDate = resourceDetail.createdDate;
        }).catch((err) => {
            console.error(err);
            this.snackbar.onSnackBar(error.ERR_GET_RESOURCE);
        })
    }
}
</script>

<style scoped>

</style>