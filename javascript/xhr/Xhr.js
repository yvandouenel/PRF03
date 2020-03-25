export default class Xhr {
    constructor(url) {
        this.url = url;
        this.req = new XMLHttpRequest();
    }
    getImages(success, fail) {
        // Ouverture de la connexion en mode asynchrone (true)
        this.req.open('GET', this.url, true);

        // Exécution de la requête
        this.req.send(null);

        // Gestion de l'événement "requête finie"
        this.req.onload = function (event) {
            console.log(this);
            // la requête s'est elle bien passée ?
            if (this.status == 200) {
                // super tout s'est bien passé
                // on va parser la réponse pour vérifier que c'est bien du JSON
                const data = JSON.parse(this.responseText);
                console.log("data : ", data);
                success(data);
            } else {
                fail(this.statusText);
            }
        }
    }
}
