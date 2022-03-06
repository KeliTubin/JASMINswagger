const express = require("express");
const router = express.Router();
// const { nanoid } = require("nanoid");
// const idLength = 8;

/**
 * @swagger
 * components:
 *   schemas:
 *     Dog:
 *       type: object
 *       required:
 *         - Breed
 * 		   - Short Description
 *         - Characteristics
 *         - Origin
 * 		   - Nature
 *         - Health
 *         - Movement
 * 		   - Nutrition
 *         - Maintenance
 *         - Children
 *       properties:
 *         Breed:
 *           type: string
 *           description: Name of the dog breed
 *         Short Description:
 *           type: string
 *           description: Short description of the dog breed
 *         Characteristics:
 *           type: string
 *           description: Characteristics of the dog breed
 *         Origin:
 *           type: string
 *           description: Explanation of the dog breed origin
 *         Nature:
 *           type: string
 *           description: Nature of the dog breed
 *         Health:
 *           type: string
 *           description: Overview about the dog breed
 *         Movement:
 *           type: string
 *           description: Explain the need of movement for the dog breed
 *         Nutrition:
 *           type: string
 *           description: Explanation about feeding the dog breed
 *         Maintenance:
 *           type: string
 *           description: Suggestions for taking good care of the dog breed
 *         Children:
 *           type: string
 *           description: Explain is the dog breed suitable for families
 *       example:
 *          Breed: Dalmaatsia koer
 *          Short Description: See tõug paistab silma oma ainulaadse laigulise kasukaga, mis on lühike, sile ja läikiv. Laigud on mustad või maksapruunid ning valgel taustal. Dalmaatsia koera keha on ruudukujuline, hästi tasakaalus, tugev ja lihaseline. Täiskasvanud Dalmaatsia koer kaalub 23–25 kg. Täiskasvanud isase turjakõrgus on 58–61 cm ja emasel 56–58 cm.
 *          Characteristics: Kogenud omanikule sobiv koer\r\r\nMõningane treening nõutav\r\r\nNaudib tempokaid jalutuskäike\r\r\nNaudib jalutamist üle 2 tunni päevas\r\r\nSuur koer\r\r\nVajab hoolitsemist ülepäeva\r\r\nAllergiaohtlik tõug\r\r\nJutukas ja häälekas koer\r\r\nValvekoer. Haugub, annab häiret ja kaitseb füüsiliselt\r\r\nVõib kooseluks teiste loomadega vajada treeningut\r\r\nVõib kooseluks lastega vajada treeningut
 *          Origin: Dalmaatsia koer on iidne tõug, pärinedes aastast 2000 eKr, mil Kreeka friisidel ja kivitahvlitel kujutati koeri, kes töötasid kõrvuti Antiik-Kreeka ja -Rooma ning Egiptuse kaarikutega. Mõned väga varajased andmed tõust pärinevad Jugoslaaviast Dalmaatsia piirkonnast, kust on tulnud ka tõu nimi. Dalmaatsia koeri on kasutatud sõja-, piirivalve-, veo-, karja-, jahi- ja tsirkusekoerana ning muidugi ka tõldade saatjatena. Olgu nende päritoluga kuidas on, aga dalmaatslased on vähemalt keskajast saati töötanud koos hobustega.
 *          Nature: Dalmaatsia koer on oma loomult sõbralik ja sotsiaalne, kuid kui nendega ei tegeleta piisavalt, võivad nad muutuda hüperaktiivseks. Dalmaatslased on pühendunud ja lojaalsed ning tahavad alati peremehele rõõmu valmistada. Nad naudivad seltskonda ja trikkide tegemist. Samas võivad nende jõud ja visadus osutuda mõne omaniku jaoks liiga suureks probleemiks. Dalmaatslased rahunevad tavaliselt kaheaastaselt, kuid tihtipeale isegi vanemana.
 *          Health: Kurtus on tõu levinuim terviseprobleem, kuid koeri saab juba noorena selle suhtes testida. Neil on eelsoodumus teatud tüüpi põiekivide tekkeks.
 *          Movement: Kui dalmaatslane on alles kutsikas, ei tohi treeninguga üle pingutada. Täiskasvanud dalmaatslased on uskumatult vastupidavad ja suudavad rännata mõõdukas tempos pea lõputult. Heas vormis täiskasvanud koer vajab päevas rohkem kui kaht tundi liikumist ja trenni ning mõtlemismänge, et stimuleerida nii nende keha kui ka meelt. Jahiinstinkti tõttu meeldib neile joosta, hüpata ja ronida, seega tuleb olla alati ettevaatlik, et tagada nende ohutus.
 *          Nutrition: Koera toidus peab olema õiges vahekorras kõiki peamisi toitaineid, samuti peab alati saadaval olema värske vesi. Oluline on ka regulaarselt koera kehaseisundit hinnata, et hoiaksid koera ideaalses vormis. Samuti on vaja meeles pidada, et koera tuleb toita vähemalt kaks korda päevas ja järgida tema konkreetse toidu manustamise juhiseid.
 *          Maintenance: Lühikese karmi karvkatte tõttu ei vaja dalmaatslased üleliia põhjalikku harjamist ja pügamist. Tõmmake kord nädalas harjamiskindaga nende karvast läbi, et eemaldada surnud karvad ning silitage seejärel karva pehme lapiga sära tagamiseks.
 *          Children: Kuigi paljude koerte kohta on arvatud, et nad saavad lastega loomuldasa hästi läbi, tuleb kõiki koeri ja lapsi õpetada omavahel suhtlema, üksteist austama ning turvaliselt koos elama. Ja ka sel juhul ei tohiks koeri väikelastega kunagi üksi jätta, vaid täiskasvanud peaksid neil kogu aeg silma peal hoidma. 
 */

 /**
  * @swagger
  * tags:
  *   name: Dog
  *   description: Dog managing API
  */

/**
 * @swagger
 * /breeds:
 *   get:
 *     summary: Returns the list of all the dog breeds
 *     tags: [Breeds]
 *     responses:
 *       200:
 *         description: The list of the dog breeds
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Breeds'
 */

 router.get("/", (req, res) => {
	const breeds = req.app.db.get("get-breeds");

	res.send(breeds);
})

router.get("/get-breeds/:id", (req, res) => {
	const dog = req.app.db.get("get-breeds").find({id: req.params.id}).value()
	res.send(dog);
})

module.exports = router;