import Xhr from "./Xhr.js";

window.onload = function () {

    const xhr = new Xhr('https://picsum.photos/v2/list?page=1&limit=5');
    // récupération des images
    xhr.getImages(insereImages, failedImages);

    function insereImages(data) {
        // parcours du tableau
        for (let i = 0; i < data.length; i++) {
            // créer un élement img du dom
            const img = document.createElement("img");
            // ajout d'attributs sur les images (src et style)
            img.setAttribute("src", data[i]["download_url"]);
            img.setAttribute("style", "max-width: 100%;");

            // Je place l'image dans le DOM
            document.getElementById("ma_div").appendChild(img);
        }
    }

    function failedImages(error) {
        console.log("Dans failedImages", error);
    }

}