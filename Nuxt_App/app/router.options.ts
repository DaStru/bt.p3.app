import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      path: '/',
      redirect: "/home"
    },
    {
        path: "/",
        component: () => import("@/components/Index.vue"),
        children: [
            {
                path: "",
                redirect: "/home"
            },
            {
                path: "home",
                component: () => import("@/pages/tabs/Home.vue")
            },
            {
                path: "music",
                component: () => import("@/pages/tabs/Music.vue")
            },
            {
                path: "hub",
                component: () => import("@/pages/tabs/Hub.vue")
            }
        ]

    }
  ],
}