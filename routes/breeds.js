const express = require("express");
const router = express.Router();
// const { nanoid } = require("nanoid");
// const idLength = 8;

/**
 * @swagger
 * components:
 *   schemas:
 *     Breeds:
 *       type: object
 *       required:
 *         - Breed
 *         - Short Description
 *       properties:
 *         breed:
 *           type: string
 *           description: Name of breed
 *         short description:
 *           type: string
 *           description: Description of breed
 *       example:
 *         breed: Hurt
 *         short description: Suur ja kõhn koer.
 */

 /**
  * @swagger
  * tags:
  *   name: breeds
  *   description: The breeds managing API
  */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the breeds
 *     tags: [Breeds]
 *     responses:
 *       200:
 *         description: The list of the breeds
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Breeds'
 */

router.get("/", (req, res) => {
	const breeds = req.app.db.get("breeds");

	res.send(breeds);
});




/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */

router.post("/", (req, res) => {
	try {
		const book = {
			id: nanoid(idLength),
			...req.body,
		};

    req.app.db.get("books").push(book).write();
    
    res.send(book)
	} catch (error) {
		return res.status(500).send(error);
	}
});

/**
 * @swagger
 * /books/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.put("/:id", (req, res) => {
	try {
		req.app.db
			.get("books")
			.find({ id: req.params.id })
			.assign(req.body)
			.write();

		res.send(req.app.db.get("books").find({ id: req.params.id }));
	} catch (error) {
		return res.status(500).send(error);
	}
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

router.delete("/:id", (req, res) => {
	req.app.db.get("books").remove({ id: req.params.id }).write();

	res.sendStatus(200);
});

module.exports = router;