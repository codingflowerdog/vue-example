<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="snackbarTimeout"
    >
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
            <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
            >
                닫기
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts">
import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";

@Component({
    name: "SnackBar"
})
export default class SideMenu extends Vue {
    snackbar = false;
    snackbarTimeout = 2000;
    snackbarText = "";

    /**
     * 스낵바 활성화
     * @param message 스낵바 메세지
     */
    onSnackBar(message: string): void {
        this.snackbarText = message;
        this.snackbar = true;
    }

}
</script>

<style scoped>

</style>