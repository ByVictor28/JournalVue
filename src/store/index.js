import { createStore } from "vuex";
import dayBookStore from "../modules/daybook/store/daybook/index"
const store = createStore({
    modules:{
      daybook:dayBookStore
    }
})

export default store