export default () => ({
  isLoading:true,
  entries:[
    {
      id:new Date().getTime(),
      date:new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis quo voluptas quos sint eaque deleniti. Velit sint quos earum quaerat. Mollitia dolorem fugit modi eligendi atque, harum quod! Hic?",
      picture:null
    },
    {
      id:new Date().getTime() + 1000,
      date:new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis quo voluptas quos sint eaque deleniti. Velit sint quos earum quaerat. Mollitia dolorem fugit modi eligendi atque, harum quod! Hic?",
      picture:null
    },
    {
      id:new Date().getTime() + 11045,
      date:new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis quo voluptas quos sint eaque deleniti. Velit sint quos earum quaerat. Mollitia dolorem fugit modi eligendi atque, harum quod! Hic?",
      picture:null
    },
  ], 
})  