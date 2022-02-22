import { VuexModule, Module, Mutation } from "vuex-module-decorators";

/**
 * 공통 스토어
 */
@Module({
    namespaced: true
})
export default class Common extends VuexModule {
    // 타이틀
    title = "";

    /**
     * 타이틀 조회
     * @return 타이틀
     */
    getTitle():string {
        return this.title;
    }

    /**
     * 타이틀 설정
     * @param title 타이틀
     */
    @Mutation
    public setTitle(title: string): void {
        this.title = title;
    }
}