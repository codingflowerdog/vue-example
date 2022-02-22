<template>
    <v-dialog
        v-model="confirmDialog"
        width="unset"
        :eager="true"
        @click:outside="confirmDialog = !confirmDialog;"
        @keydown.esc="confirmDialog = !confirmDialog;"
    >
        <v-card>
            <!-- 확인 메세지 -->
            <v-card-text
                class="pt-5"
            >
                <p
                    v-for="(confirmDialogTextLine, idx) in confirmDialogText.split('\n')"
                    style="line-height: 0.5"
                    v-bind:key="idx"
                >
                    {{ confirmDialogTextLine }}
                </p>
            </v-card-text>

            <!-- 액션 버튼 -->
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="green darken-1"
                    text
                    @click="confirmEvent"
                >
                    예
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="confirmDialog = !confirmDialog;"
                >
                    아니오
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Vue from "vue";

@Component({
    name: "ConfirmDialog"
})
export default class ConfirmDialog extends Vue {
    confirmDialog = false;
    confirmDialogText = "";
    confirmEvent: any = () => { return null };

    /**
     * 확인창
     * @param text 확인창 텍스트
     * @param event 이벤트
     */
    onConfirmDialog(text: string, event?: any): void {
        this.confirmDialogText = text;
        this.confirmDialog = !this.confirmDialog;

        // 이벤트 파라미터가 존재하는 경우 호출
        if (event != null) {
            this.confirmEvent = event;
        }
    }

    /**
     * 확인창 다이얼로그 토글
     */
    toggleDialog(): void {
        this.confirmDialog = !this.confirmDialog;
    }
}
</script>

<style scoped>

</style>