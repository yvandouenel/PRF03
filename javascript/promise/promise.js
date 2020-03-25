function getToken() {
    return new Promise((resolve, reject) => {
        // création d'aléa asynchrone
        setTimeout(function() {
            if(Math.random() > 0.5) {
                // cas positif : renvoie du token
                resolve("qsdfsqdflogflfgo!sdf");
            } else {
                reject(new Error("Problème pour accéder au token"));
            }

        }, 2000);
    });
}

function getUser(token) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(Math.random() > 0.2) {
                // cas positif : renvoie du token
                resolve({uid: 1, ulogin: "bob"});
            } else {
                reject(new Error("Problème pour accéder à l'utilisateur"));
            }
        },200);
    });
}

getToken()
.then(token => { return getUser(token); })// attention pour chaîner les promesses, il faut renvoyer ici une nouvelle promesse !
.then(data => { console.log("user : ", data);})
.catch(error => { console.error(error) });