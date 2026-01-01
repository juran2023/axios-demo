import { ref } from "vue";
import axios from "axios";

export function useFetchUser() {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchUser = async (userId) => {
    loading.value = true;
    error.value = null;
    // use axios to fetch user data

    let userData = localStorage.getItem("user");
    if (userData) {
      loading.value = false;
      user.value = JSON.parse(userData);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/user?id=${userId}`
      );
      user.value = response.data;
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    loading,
    error,
    fetchUser,
  };
}
