import axiosInstance from "@/api/axios";

async function checkLoggedIn() {
  let user = {};
  await axiosInstance
    .get(`${import.meta.env.VITE_API_URL}/profile`)
    .then((res) => {
      if (res.data.user) user = { ...res.data.user };
    })
    .catch((e) => console.log(e));
}

export { checkLoggedIn };
