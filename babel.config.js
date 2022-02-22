// 플러그인 리스트 초기화
const plugins = [];

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "stage") {
    // 콘솔 로그 삭제 플러그인 추가
    plugins.push(["transform-remove-console", { exclude: ["error", "log", "warn"] }])
}

module.exports = {
    presets: [
        "@vue/cli-plugin-babel/preset"
    ],
    plugins: plugins
}