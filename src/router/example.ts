import {NavigationGuardNext, Route, RouteConfig} from "vue-router";
import ResourceForm from "@/views/form/ResourceForm.vue"
import ResourceList from "@/views/table/ResourceList.vue"

export const namespaced = true;
const exampleRoutes: Array<RouteConfig> = [
    {
        path: "/form",
        name: "ResourceForm",
        component: ResourceForm,
        beforeEnter: (to: Route, from: Route, next: NavigationGuardNext) => {
            next();
        }
    }, {
        path: "/",
        name: "ResourceList",
        component: ResourceList,
        beforeEnter: (to: Route, from: Route, next: NavigationGuardNext) => {
            next();
        }
    }
];

export { exampleRoutes }