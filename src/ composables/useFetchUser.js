import { ref } from "vue";
import axios from "axios";

export default function useFetchUser() {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchUser = async (userId) => {
    loading.value = true;
    error.value = null;
    // use axios to fetch user data

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      user.value = response.data;
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
