import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chart from "./views/Chart.vue";
import Explore from "./views/Explore.vue";
import Lyrics from "./views/Lyrics.vue";
import Pamphlet from "./views/Pamphlet.vue";
import NProgress from "nprogress";

Vue.use(Router);
const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/chart",
            name: "chart",
            component: Chart
        },
        {
            path: "/explore",
            name: "explore",
            component: Explore
        },
        {
            path: "/lyrics",
            name: "lyrics",
            component: Lyrics
        },
        {
            path: "/lyrics/:artist",
            name: "lyricsArtist",
            component: Lyrics,
            props: true
        }, {
            path: "/pamphlet",
            name: "pamphlet",
            component: Pamphlet,
            props: true
        }, {
            path: "*",
            name: "404",
            component: Home,
            props: true
        }
    ]
});

NProgress.configure({ showSpinner: false });
NProgress.configure({ easing: "ease", speed: 300 });

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done(true);
});

export default router;