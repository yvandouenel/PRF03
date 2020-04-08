class Connection {
    constructor() {
        this.url_server = "http://www.coopernet.fr/";
        this.user_id = "85";
        this.login = "yd";
        this.pwd = "yd";
        this.token = "";
    }
    getCards = (term_number, callbackSuccess, callbackFailed) => {
        // création de la requête
        console.log("Dans getCards de Connection");
        fetch(this.url_server + "memo/list_cartes_term/" +
            this.user_id +
            "/" +
            term_number +
            "&_format=json&time=" +
            Math.floor(Math.random() * 10000), {
            credentials: "same-origin",
            method: "GET",
            headers: {
                "Content-Type": "application/hal+json",
                "X-CSRF-Token": this.token,
                "Authorization": "Basic " + btoa(this.login + ":" + this.pwd) // btoa = encodage en base 64
            }
        })
            .then(response => {
                console.log("data reçues dans getCards avant json() :", response);
                if (response.status == 200) return response.json();
                else throw new Error("Problème de réponse ", response);
            })
            .then(data => {
                console.log("data reçues dans getCards :", data);
                if (data) {
                    callbackSuccess(data);
                } else {
                    throw new Error("Problème de data ", data);
                    //callbackFailed("");
                }
            })
            .catch(error => { console.error("Erreur attrapée dans getCards", error); });
    };

    getTerms = (callbackSuccess, callbackFailed) => {
        // création de la requête
        console.log("Dans getTerms de connection");
        fetch(this.url_server + "memo/themes/" +
            this.user_id, {
            credentials: "same-origin",
            method: "GET",
            headers: {
                "Content-Type": "application/hal+json",
                "X-CSRF-Token": this.token,
                "Authorization": "Basic " + btoa(this.login + ":" + this.pwd) // btoa = encodage en base 64
            }
        })
            .then(response => {
                console.log("data reçues dans getTerms avant json() :", response);
                if (response.status == 200) return response.json();
                else throw new Error("Problème de réponse ", response);
            })
            .then(data => {
                console.log("data reçues dans getTerms :", data);
                if (data) {
                    callbackSuccess(data);
                } else {
                    throw new Error("Problème de data ", data);
                }
            })
            .catch(error => {
                console.error("Erreur attrapée dans getTerms", error);
                callbackFailed(error.message);
            });
    };
    /**
     * Va récupérer le token qui servira à chaque session 
     * pour nous identifier auprès de Drupal
     */
    getToken = (callbackSuccess, callbackFailed) => {
        console.log("Dans getToken de connection");
        fetch(this.url_server + "rest/session/token/", {
            credentials: "same-origin",
            method: "GET"
        })
            .then(response => {
                // si le statut de la réponse est 200, c'est que du point de vue
                // du serveur, tout s'est bien passé
                // On teste avec la méthode text() si le serveur a bien renvoyé du texte
                if (response.status === 200) return response.text();
                else throw new Error("Problème de réponse ", response);
            })
            .then(data => {
                console.log("data reçues dans getToken :", data);
                // Vérification que la donnée textuelle n'est pas vide
                if (data) {
                    // affectation de la donnée à this.token
                    this.token = data;
                    // on appelle la méthode de callback
                    callbackSuccess();
                } else {
                    throw new Error("Problème de data ", data);
                }
            })
            .catch(error => { callbackFailed("Erreur dans getToken" + error.message); });
    };
}

export default Connection;