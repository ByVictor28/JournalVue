// export const myGetter = async ({state}) => {
//  return
// }


export const getEntriesByTerm = (state) => (search="") => {
  // console.log(state)
  if(search.length === 0) return state.entries

  return state.entries.filter(entry => entry.text.toLowerCase().includes(search.toLowerCase()))
}
export const getEntryById = (state) => (id) => {
  const entry = state.entries.find(entry => entry.id === id)

  if(!entry) return 

  return{...entry}
}