<template>
  <div class="home">
    <Header msg="header" />
    <div class="row">
      <div class="col-3">
        <div class="container">
          <Searching msg="Searching" />
        </div>
      </div>
      <div class="col-8">
        <Breeds msg="Breeds" />
      </div>
    </div>
    <Footer msg="footer" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Breeds from "@/components/Breeds.vue";
import Footer from "@/components/footer.vue";
import Searching from "@/components/Searching.vue";

export default {
  name: "Home",
  components: {
    Header,
    Breeds,
    Footer,
    Searching,
  },
};
</script>
