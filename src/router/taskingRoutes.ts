const TaskingHome = () => import("@/views/tasking/TaskingHome.vue");

export default [
    {
        path: "/tasking",
        name: "Tasking",
        component: TaskingHome,
    }
];