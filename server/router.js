const express = require("express");
const router = express.Router();
const { Jasmin } = require("./dbConnection");
const { Todos } = require("./dbConnection");
const authRoutes = require("./authenticate.router");

router.use("/auth", authRoutes);

router.post("/get-breeds", async function (breeds_request, breeds_response) {

  const options = {
    page: breeds_request.body.page || 1,
    limit: 18,
    projection: { Breed: 1 },
  };
  const result = await Jasmin.paginate({}, options);
  breeds_response.send(result);
});
router.get(
  "/get-breeds-list",
  async function (breeds_request, breeds_response) {
    const result = await Jasmin.find({}, { Breed: 1 });
    breeds_response.send(result);
  }
);
router.get("/get-breed/:id", async function (request, response) {
  const result = await Jasmin.findOne({ _id: request.params.id });
  // console.log(result);
  response.send(result);
});
module.exports = router;
