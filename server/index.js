const express = require('express');
const app = express();
const port = 4111
const routes = require("./router")



const router = express.Router();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const swaggerUi = require("swagger-ui-express"),
  swaggerDoc = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api/v1", router);



const bodyParser = require("body-parser");
const db = require("./dbConnection");

const expressJwt = require("express-jwt");
const { SECRET } = require("./config");


app.use(
  expressJwt({ secret: SECRET, algorithms: ["HS256"] }).unless({
    path: ["/api/auth/register", "/api/auth/login", "/api/get-breeds-list", "/api/get-breeds",
    {url: /^\/api\/get-breeds\/.*/, methods: []},],
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Breeds for API v.1.0.0')
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/api", routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
