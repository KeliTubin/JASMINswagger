<template>
  <section>
    <div class="container-feedback">
      <div class="row">
        <div class="col-sm-5 col-md-6 col-12 pb-4">
          <div class="comment mt-4 text-justify float-left">
            <h4>Jhon Doe</h4>
            <span> (20 October, 2018)</span>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus numquam assumenda hic aliquam vero sequi velit molestias
              doloremque molestiae dicta?
            </p>
          </div>
          <div class="text-justify darker mt-4 float-right">
            <h4>Rob Simpson</h4>
            <span> (20 October, 2018)</span>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus numquam assumenda hic aliquam vero sequi velit molestias
              doloremque molestiae dicta?
            </p>
          </div>
          <div class="comment mt-4 text-justify">
            <h4>Jhon Doe</h4>
            <span> (20 October, 2018)</span> <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus numquam assumenda hic aliquam vero sequi velit molestias
              doloremque molestiae dicta?
            </p>
          </div>
          <div class="darker mt-4 text-justify">
            <h4>Rob Simpson</h4>
            <span> (20 October, 2018)</span> <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus numquam assumenda hic aliquam vero sequi velit molestias
              doloremque molestiae dicta?
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4"
        >
          <form id="algin-form">
            <div class="form-group">
              <h4>Jäta tagasiside</h4>
              <label for="message"></label>
              <textarea
                name="msg"
                id=""
                msg
                cols="30"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="name">Kasutajanimi</label>
              <input
                type="text"
                name="name"
                id="fullname"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <button type="button" id="post" class="btn">
                Postita tagasiside
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { ref } from "Jasmin";
// import axios from "axios";

// export default {
//   name: "feedback",
//   props: {
//     msg: String,
//   },
// }
//   setup() {
//     const feedback = ref(["Read a book", "Go for a walk", "Eat food"]);
//     const newFeedback = ref("");
//     const feedbackFromServer = ref([]);
//     const singleFeedback = red({});

//     async function getFeedback() {
//       const result = await axios.get("/api/get-todos");
//       feedbackFromServer.value = result.data;  // axios data tuleb alati salvestada result.data //
//       console.log(result.data);
//     }

//     async function getTodo(id) {
//       const result = await axios.get("/api/get-todo/" + id);
//       singleTodo.value = result.data;  // axios data tuleb alati salvestada result.data //
//       console.log(result.data);
//     }

//     async function addFeedback(){
//       await axios.post("/api/add/feedback", {
//         title: newFeedback.value,
//         status: "ACTIVE",
//       });
//       newFeedback.value = "";
//       await getFeedback(); // empty field after submit to todolist //
//     }

//     getFeedback();

//     // function addNewTodo() {
//     //   todos.value.push(newFeedback.value);
//     //   newFeedback.value = "";
//     // }

//     return {
//       feedback,
//       newFeedback,
//       addNewTodo,
//       feedbackFromServer,
//       addFeedback,
//       singlefeedback,
//       getFeedback,
//     };
//   },
// };
</script>
