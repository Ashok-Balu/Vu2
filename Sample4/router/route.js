import AboutCmp from '../components/AboutCmp.vue';
import HomeCmp from '../components/HomeCmp.vue';
import TrainingCmp from '../components/TrainingCmp.vue';
import ContactCmp from '../components/ContactCmp.vue';
import CourseCmp from "../components/CourseCmp.vue";
import CourseDetailsCmp from '../components/CourseDetailsCmp.vue'

// export const routes = [
// {path: '' , component: HomeCmp},
// {path: '/about' , component: AboutCmp},
// {path: '/training' , component: TrainingCmp},
// {path: '/contact' , component: ContactCmp}
// ];

export const routes = [
    {
      path: "",
      component: HomeCmp,
      children: [{ path: "", component: CourseCmp }],
      //  In child course component is added.So using <router-view> it will navigate
    },
    { path: "/about", component: AboutCmp },
    {
      path: "/training",
      component: TrainingCmp,
      children: [
        { path: "", component: CourseCmp},
      // children: [{ path: "course", component: CourseCmp}],
      // if i use above ,by manually add in url we can see course component
        { path: ":id", component: CourseDetailsCmp },
        //route parameters
        ],
    },
    { path: "/contact", component: ContactCmp },
  ];
