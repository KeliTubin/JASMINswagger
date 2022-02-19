<template>
  <div>
    <!-- Dogbreed name and picture -->
    <div class="row">
      <div class="col">
        <div class="dogbreed">
          <!-- <h1>JASMIN</h1> -->
          <h1>{{ singleBreed.Breed }}</h1>
          <img v-bind:src="singleBreed.Picture" />
        </div>
        <!-- 1st category and description -->
        <div>
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>PÄRITOLU</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Origin }}</p>
              </div>
            </div>
          </div>
          <!-- 2nd category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>ISELOOM</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Nature }}</p>
              </div>
            </div>
          </div>
          <!-- 3rd category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>TERVIS</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Health }}</p>
              </div>
            </div>
          </div>
          <!-- 4th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>LIIKUMINE</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Movement }}</p>
              </div>
            </div>
          </div>
          <!-- 5th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>TOITUMINE</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Nutrition }}</p>
              </div>
            </div>
          </div>
          <!-- 6th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>HOOLDAMINE</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Maintenance }}</p>
              </div>
            </div>
          </div>
          <!-- 7th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <!-- <h1>{{ msg }}</h1> -->
                <h2>PERESÕBRALIK</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Children }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import router from "./../router";
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const route = useRoute();
    const singleBreed = ref({});
    console.log(route.params.id);

    async function getBreed(id) {
      const result = await axios.get("/api/get-breed/" + route.params.id, {headers:{authorization:localStorage.getItem("token")}}).catch(error => {
        console.log(error);
        router.push("/Login")
      });
      singleBreed.value = result.data;
      // console.log(result.data);
      console.log(id);
    }
    getBreed();
    return {
      singleBreed,
      getBreed,
    };
  },
};
</script>

