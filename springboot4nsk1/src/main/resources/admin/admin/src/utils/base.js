const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4nsk1/",
            name: "springboot4nsk1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4nsk1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "老年一站式服务平台"
        } 
    }
}
export default base
