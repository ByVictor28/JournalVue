// export const myMutation = async ({state}) => {

// }


export const setEntries = (state,entries) => {
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}
export const updateEntry = (state,data) => {
  const newArray = state.entries.map(entry => {
    if(entry.id !== data.id){
      console.log("1")
      return entry
    }else{
      console.log("2")
      return {
        ...data
      }
    }
  })
  console.log(newArray)
  state.entries = newArray

}
export const createEntry = (state,entry) => {
  state.entries = [entry,...state.entries]
}
export const deleteEntry = (state,id)=> {
  
  const newArray = state.entries.filter(entry => entry.id !== id)

  state.entries = newArray

} 