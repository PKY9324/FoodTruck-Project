import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/index";
import Search from "@/components/Search/index";
import SearchFocus from "@/components/SearchFocus/index";
import LoginModal from '@/components/LoginModal/index';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/search",
            name: "Search",
            component: Search
        },
        {
            path: "/searchf",
            name: "SearchFocus",
            component: SearchFocus
        }
    ]
});