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
                    //callbackFailed("");
                }
            })
            .catch(error => { console.error("Erreur attrapée dans getTerms", error); });
    };
    getToken = (callbackSuccess, callbackFailed) => {
        console.log("Dans getToken de connection");
        fetch(this.url_server + "rest/session/token/", {
            credentials: "same-origin",
            method: "GET"
        })
            .then(response => {
                if (response.status === 200) return response.text();
                else throw new Error("Problème de réponse ", response);
            })
            .then(data => {
                console.log("data reçues dans getToken :", data);
                if (data) {
                    this.token = data;
                    callbackSuccess();
                } else {
                    throw new Error("Problème de data ", data);
                    //callbackFailed("Erreur de login ou de mot de passe");
                }
            })
            .catch(error => { console.error("Erreur attrapée dans getToken", error); });
    };
}

export default Connection;