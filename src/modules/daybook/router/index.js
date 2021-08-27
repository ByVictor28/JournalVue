export default {
  name:"DayBookLayout",
  component:()=>import(/* webpackChunkName: "DayBookLayout" */ "@/modules/daybook/layouts/DayBookLayout.vue"),
  children:[
    {
      path:"",
      name:"no-entry",
      component:()=>import(/* webpackChunkName: "NoEntryS" */ "../views/NoEntrySelected.vue")
    },
    {
      path:":idEntry",
      name:"entry",
      component:()=>import(/* webpackChunkName: "Entry" */ "../views/EntrySelected.vue")
    }
  ]
}