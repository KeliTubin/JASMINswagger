<template>
  <div>
    <div class="row">
      <div class="col">
        <router-link to="/">
          <div class="header">
            <div v-if="tokenexists">
              <a
                class="btn btn-info btn-lg m-3"
                @click="clear"
                onclick="location.href='../';"
                >Logi välja</a
              >
            </div>
            <div v-else>
              <a
                class="btn btn-info btn-lg m-3"
                onclick="location.href='../Login';"
                >Logi sisse</a
              >
              <a
                class="btn btn-info btn-lg m-3"
                onclick="location.href='../Register';"
                >Loo kasutaja</a
              >
            </div>
            <!-- <a class="btn btn-info btn-lg" onclick="location.href='../Login';"
              >Logi sisse</a
            >
            <a
              class="btn btn-info btn-lg"
              onclick="location.href='../Register';"
              >Loo kasutaja</a
            > -->
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    function clear() {
      localStorage.clear();
      //  console.log(localStorage.getItem("token"));
    }

    return {
      tokenexists: localStorage.getItem("token"),
      clear,
    };
  },
};
// var tokenexists;
// var boxElement = document.querySelector('.login')
// if (localStorage.getItem("token")) {
//   tokenexists = true;

//     boxElement.style.display = "none"

//   // document.getElementById("unregistered").style.display = "none";
// }
// console.log(tokenexists);
</script>
