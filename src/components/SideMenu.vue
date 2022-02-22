<template>
    <v-navigation-drawer
        app
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        v-model="drawer"
    >
        <!-- 타이틀 헤더 -->
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    VUE Example
                </v-list-item-title>
                <v-list-item-subtitle>
                    VUE 예제 모음
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider/>

        <!-- 사용자 프로필 -->
        <v-list>
            <v-list-item
                link
                @click="dropdown = !dropdown"
            >
                <v-list-item-content>
                    <v-list-item-title class="test-h6">
                        사용자 이름
                    </v-list-item-title>
                    <v-list-item-subtitle> user@example.com </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-divider/>

        <!-- 메뉴 목록 -->
        <v-list>
            <v-list-item
                v-for="(menu, idx) in menus"
                v-bind:key="idx"
                link
                :to="menu.path"
            >
                <v-list-item-icon>
                    <v-icon>{{ menu.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ menu.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import {Component, Prop} from "vue-property-decorator";
import Vue from "vue";
import {ISideMenu} from "@/type/ISideMenu";

@Component({
    name: "SideMenu"
})
export default class SideMenu extends Vue {
    @Prop() menus!: Array<ISideMenu>;
    @Prop() drawer!: boolean;

    dropdown = false;
}
</script>

<style scoped>

</style>