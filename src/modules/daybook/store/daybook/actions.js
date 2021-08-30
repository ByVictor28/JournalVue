// export const myAccion = async ({commit}) => {

import axiosJournal from "../../../../api/journalAPI"

// }
export const loadEntries = async ({commit}) => {
  const {data} = await axiosJournal.get("/entries.json")
  
  if (!data){
    commit("setEntries",[])
    return
  }

  const entries =  []

  for (const id of Object.keys(data)) {
    entries.push({id,...data[id]})
  }
  commit("setEntries",entries)

}

export const updateEntry = async ({commit},entry) =>  {
  console.log(commit,entry)

  const newEntry = {
    text:entry.text,
    date:entry.date
  }
  const {data} =  await axiosJournal.put(`/entries/${entry.id}.json`,newEntry)
  
  if(!data) return
  
  commit("updateEntry",{id:entry.id,...data})
}
export const createEntry = async ({commit},entry) => {
  
  const {data} = await axiosJournal.post("/entries.json",entry)

  console.log(data)

  if(!data) return
  
  commit("createEntry",{id:data.name,...entry})

  return data.name
}

export const deleteEntry =async ({commit},id) => {
  console.log(commit,id)

  await axiosJournal.delete(`/entries/${id}.json`)

  commit("deleteEntry",id)
  return null
}