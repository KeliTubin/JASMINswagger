<template>
  <div class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="col-4">
        <div class="card">
          <h3>Registreeri</h3>
          <div class="card-body">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="email"
                v-model="email"
                placeholder="E-post"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="password"
                placeholder="Parool"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password2"
                v-model="password2"
                placeholder="Korda parooli"
              />
            </div>
            <button type="button" @click="register" class="btn btn-primary">
              Loo kasutaja
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import router from "./../router";
export default defineComponent({
  setup() {
    let email = ref("");
    let password = ref("");
    let password2 = ref("");
    async function register() {
      if (password.value === password2.value) {
        await axios.post("/api/auth/register", {
          email: email.value,
          password: password.value,
        });
        router.push("/login");
      } else {
        alert("Password are not matching!");
      }
    }
    return {
      email,
      password,
      password2,
      register,
    };
  },
});
</script>
