const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const columns = [
  {
    "id": "17",
    "name": "À apprendre",
    "cards": [
      {
        "id": "468",
        "question": "Qu'est ce que le web ?",
        "answer": "client web, serveur web, protocole de transfert des données (http), HTML",
        "explanation": null,
        "colonne": "17",
        "show_reponse": false
      },
      {
        "id": "473",
        "question": "Inventeur du Web ?",
        "answer": "Tim Berners-Lee",
        "explanation": null,
        "colonne": "17",
        "show_reponse": false
      },
      {
        "id": "477",
        "question": "Qu'est ce que le W3C ?",
        "answer": "World Wide Web Consortium. Organisme de standardisation des technologies du web.",
        "explanation": null,
        "colonne": "17",
        "show_reponse": false
      }
    ]
  },
  {
    "id": "18",
    "name": "Je sais un peu",
    "cards": [
      {
        "id": "509",
        "question": "Peut-il y avoir plusieurs header et footer dans une page web ?",
        "answer": "Oui car on peut (il faut) créer des header et des footer d'articles, de sections ...",
        "explanation": null,
        "colonne": "18",
        "show_reponse": false
      },
      {
        "id": "518",
        "question": "Quels sont les 2 familles de règles essentielles à respecter pour rendre accessible une page web ?",
        "answer": "La structure de l'information et les liens. Cf https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html",
        "explanation": null,
        "colonne": "18",
        "show_reponse": false
      }
    ]
  },
  {
    "id": "19",
    "name": "Je sais bien",
    "cards": [
      {
        "id": "530",
        "question": "L'attribut \"alt\" doit-il toujours être présent dans une balise image ?",
        "answer": "Oui",
        "explanation": null,
        "colonne": "19",
        "show_reponse": false
      },
      {
        "id": "537",
        "question": "Dans quel cas la valeur de l'attribut \"alt\" d'une image doit-elle être différente d'une chaîne de caractères vide ?",
        "answer": "Quand l'image apporte une information essentielle à la compréhension du contexte.",
        "explanation": null,
        "colonne": "19",
        "show_reponse": false
      }
    ]
  },
  {
    "id": "20",
    "name": "Je sais parfaitement",
    "cards": [
      {
        "id": "719",
        "question": "Dans quel cas utilise-t-on une section ?",
        "answer": "Pour regrouper des éléments sémantiquement liés (ex : Le titre de la section actualités et toutes les actualités)",
        "explanation": null,
        "colonne": "20",
        "show_reponse": false
      },
      {
        "id": "723",
        "question": "Quelles sont les principales balises structurantes apportées par le HTML 5 ?",
        "answer": "header, main, footer, section, article, aside, nav",
        "explanation": null,
        "colonne": "20",
        "show_reponse": false
      }
    ]
  }
]

app.get("/api/columns", (req, res) => {
  res.json(columns);
});

app.post("/api/columns", (req, res) => {
  const column = { id: Date.now(), ...req.body };
  columns.push(column);

  res.json(column);
});

app.patch("/api/bugs/:id", (req, res) => {
  const index = bugs.findIndex(bug => bug.id === parseInt(req.params.id));
  const bug = bugs[index];
  if ("resolved" in req.body) bug.resolved = req.body.resolved;
  if ("userId" in req.body) bug.userId = req.body.userId;

  res.json(bug);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
