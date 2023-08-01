"strict mode"

const app = createApp({
  data() {
    return {
      randomEmail: [],
    };
  },
  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/") //url incompleto
    .then((axiosResp) => {
      this.randomEmail = axiosResp.data.response;
    });
  },
}).mount("#app");