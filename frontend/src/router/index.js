import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import LoginComponent from "@/components/Login";
import SecureComponent from "@/components/SecureArea";

// import HelloWorld from './../components/HelloWorld';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: "/",
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        }
    ]
});
