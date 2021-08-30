import axios from "axios"

const uploadImage = async (file) => {
  if (!file) return

  try {
    const formData = new FormData()
    formData.append("upload_preset","g0kjwak9")
    formData.append("file",file)
    const url = "https://api.cloudinary.com/v1_1/dtyjtokie/image/upload"

    const {data} =await axios.post(url,formData)

    console.log(data)

    return data.secure_url
  } catch (error) {
    console.error("Error al cargar la imagen")
    return null
  }
}

export default uploadImage