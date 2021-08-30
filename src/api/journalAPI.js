import axios  from "axios";

const axiosJournal = axios.create({
  baseURL: 'https://vue-journal-5a58c-default-rtdb.firebaseio.com',
});

export default axiosJournal