import {createRouter, createWebHashHistory} from 'vue-router'
import Landing from "@/views/Landing.vue";
import About from "@/views/About.vue";
import ContactUs from "@/views/Contact.vue";
import NotFound from "@/components/ui/NotFound.vue";

const routes = [
    {path: '/', component: Landing,},
    {path: '/about', component: About,},
    {path: '/contact-us', component: ContactUs,},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({left: 0, top: 0})
            }, 500)
        })
    },
    history: createWebHashHistory(),
    routes,
});
export default router