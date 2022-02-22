<template>
    <container>
        <v-form
            ref="resourceForm"
            v-model="resourceValidate"
            lazy-validation
        >
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                >
                    <v-text-field
                        v-model="resourceName"
                        label="리소스 이름"
                        counter="20"
                        :rules="[value => !!value, '리소스 이름을 입력해주세요', value => value.length <= 20, '최대 길이를 초과했습니다.']"
                        required
                    />
                </v-col>

                <v-col
                    cols="12"
                    sm="12"
                >
                    <v-btn
                        color="primary"
                        @click="confirmDialog.onConfirmDialog(confirm.CONFIRM_CREATE_RESOURCE, createResource)"
                    >
                        생성
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>

        <!-- 스낵바 -->
        <SnackBar ref="snackbar"/>
    </container>
</template>

<script lang="ts">
import {Component, Ref} from "vue-property-decorator";
import Vue from "vue";
import SnackBar from "@/components/SnackBar.vue"
import {error, confirm, message} from "@/constant";
import {createResource} from "@/api";
import {IResource} from "@/type/IResource";
import ConfirmDialog from "@/components/ConfirmDialog.vue";

@Component({
    name: "ResourceForm",
    components: {
        SnackBar,
        ConfirmDialog
    }
})
export default class ResourceForm extends Vue {
    // 폼 설정
    resourceValidate = true;

    // 확인 메세지
    confirm = confirm;

    // 리소스 이름
    resourceName = "";

    // 레퍼런스 초기화
    @Ref() readonly snackbar!: SnackBar;
    @Ref() readonly resourceForm!: HTMLFormElement;
    @Ref() readonly confirmDialog!: ConfirmDialog;

    /**
     * 입력값 클리어
     */
    clear(): void {
        this.resourceName = "";
    }

    /**
     * 리소스 생성
     */
    createResource(): void {
        const resource:IResource = {
            resourceName: this.resourceName
        }
        createResource(resource).then(() => {
            this.snackbar.onSnackBar(message.MSG_CREATE_RESOURCE);
            this.clear();
        }).catch((err) => {
            console.error(err);
            this.snackbar.onSnackBar(error.ERR_CREATE_RESOURCE);
        })
    }
}
</script>

<style scoped>

</style>