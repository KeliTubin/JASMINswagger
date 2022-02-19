<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">Subpage</router-link>
  </div> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.multiselect-dropdown {
  display: none;
  font-size: 15px;
}
/* Searching categories and options text */
.list-group {
  font-size: 15px;
}

.dogbreed {
  text-align: center;
  margin-bottom: 50px;
}
.category {
  margin-top: 50px;
}
.catdesc {
  margin-top: 50px;
  text-align: left;
}

.dogbreed .h1,
h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

img {
  width: 40%;
}

.header {
  background-image: url("https://i.ibb.co/pLPZW3H/headerpicturefinal.jpg");
  background-size: 100% 150px;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  line-height: 150px;
  text-align: right;
}

.headerimage {
  width: 20%;
  height: 100%;
}

.row {
  justify-content: center;
}

footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  background-color: powderblue;
  height: 70px;
  vertical-align: middle;
  line-height: 70px;
}

body {
  overflow-x: hidden;
}

.navbar-nav {
  width: 100%;
}

@media (min-width: 568px) {
  .end {
    margin-left: auto;
  }
}

@media (max-width: 768px) {
  #post {
    width: 100%;
  }
}

#clicked {
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  width: 100%;
  background-color: #ecb21f;
  border-color: #a88734 #9c7e31 #846a29;
  border-width: 1px;
  border-style: solid;
  border-radius: 13px;
}

#post {
  margin: 10px;
  padding: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  background-color: #ecb21f;
  border-color: #a88734 #9c7e31 #846a29;
  border-width: 1px;
  border-style: solid;
  border-radius: 13px;
  width: 50%;
}

/* Feedback section design */
.container-feedback {
  padding-top: 70px;
}

.comments {
  margin-top: 20px;
  margin-left: 20px;
}

.darker {
  border: 1px solid #ecb21f;
  float: right;
  border-radius: 5px;
  padding-left: 40px;
  padding-right: 30px;
  padding-top: 30px;
}

.comment {
  border: 1px solid #ecb21f;
  float: left;
  border-radius: 5px;
  padding-left: 40px;
  padding-right: 30px;
  padding-top: 10px;
}

.comment h4,
.comment span,
.darker h4,
.darker span {
  display: inline;
}

h1,
h4 {
  font-weight: bold;
}

#align-form {
  padding-top: 50px;
}

.form-group input,
.form-group textarea {
  border: 1px solid #ecb21f;
  border-radius: 12px;
}

form {
  border: 1px solid #ecb21f;
  border-radius: 5px;
  padding: 20px;
}

li {
  display: inline-block;
}

ul {
  text-align: center;
  width: 100%;
}

.btn {
  color: blue;
}

</style>
