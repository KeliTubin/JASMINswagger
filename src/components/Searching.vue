<template>
  <!-- Search -->
  <div>
    <div class="container-search">
      <Multiselect
        v-model="search"
        mode="tags"
        :closeOnSelect="false"
        :searchable="true"
        :createTag="false"
        :options="search"
        @select="onselect"
      />
      <!-- {{ search }} -->
      <br />
      <ul class="list-group" id="myList">
        <li class="list-group-item">
          <p>Värvus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Valge</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Must</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Pruun</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Oranz</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Punane</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Sinine</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kollane</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Hall</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kuldne</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Sobivus omaniku kogemuse põhjal</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kogenematu</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Vähese kogemusega</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kogenud</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Treeningu vajadus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Baastreening</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Lisatreening</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Mõningane treening</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Allergiaohtlik koer</p>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="flexRadioDefault1"
              name="flexRadioDefault"
            />
            <label class="form-check-label" for="flexRadioDefault1">Jah</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="flexRadioDefault1"
              name="flexRadioDefault"
            />
            <label class="form-check-label" for="flexRadioDefault1">Ei</label>
          </div>
        </li>
        <li class="list-group-item">
          <p>Koera suurus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kääbuskoer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Väike koer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Keskmine koer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Suur koer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Ülisuur koer</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Jalutuskäigu pikkus päevas</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >30 minutit</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >1 tund</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >2 tundi</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >> 2 tundi</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Karhva hooldus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Iga päev</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Korra nädalas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kaks korda nädalas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kolm korda nädalas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Aegajalt</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Iseloom</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Vaikne</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Jutukas ja häälekas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Väga häälekas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Valvekoer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Pole valvekoer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Perekoer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Sobib teiste loomadega</label
            >
          </div>
        </li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary">Search</button>
  </div>
</template>

<script>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import router from "./../router";

export default {
  components: {
    Multiselect,
  },
  setup() {
    let search = ref([]);
    function onselect(event) {
      console.log(event);
      router.push({ name: "About", params: { id: event } });
    }
    async function getbreeds() {
      const result = await axios.get("/api/get-breeds-list");
      search.value = result.data.map((result) => ({
        label: result.Breed,
        value: result._id,
      }));

      console.log(result.data);
      //console.log("123");
    }
    getbreeds();
    return {
      search,
      onselect,
    };
  },
};
</script>
