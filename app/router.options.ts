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
        component: () => import("@/components/index.vue"),
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
              path: "playlist",
              component: () => import("@/pages/tabs/Playlist.vue"),
            },
            {
                path: "hub",
                component: () => import("@/pages/tabs/Hub.vue")
            },
            {
              path: "blog1",
              component: () => import("@/pages/blog/Blog1.vue")
            },
            {
              path: "blog2",
              component: () => import("@/pages/blog/Blog2.vue")
            },
            {
              path: "blog3",
              component: () => import("@/pages/blog/Blog3.vue")
            },
            {
              path: "learn",
              component: () => import("@/pages/Learn.vue")
            },
        ]

    }
  ],
}