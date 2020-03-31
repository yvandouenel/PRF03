window.onload = function () {
    console.log("dans slideshow.js");

    // Récupération des images

    class Slideshow {
        constructor(url) {
            this.url = url;

            // récupération des images
            this.getImages();

            // Construction de la base du ss
            this.section_ss = this.drawSlideshow();
        }
        getImages() {
            console.log("dans getImages");
            fetch(this.url)
                .then(response => { 
                    console.log("response : ", response );
                    if(response.status == 200) {
                        return response.json();
                    }
                     
                })
                .then(data => {
                    console.log("data : ", data)
                    this.addImages(data);
                })
                .catch(error => { console.log("Erreur : ", error) });
        }
        addImages(data) {
            console.log("dans addImages");
            for(let i = 0; i < data.length; i++) {
                let img_url = data[i].download_url;
                const img = document.createElement("img");
                img.setAttribute("src", img_url);
                img.setAttribute("style", "max-width: 100%");

                this.section_ss.appendChild(img);

                // gestionnaire d'événement
                img.onclick = function(e) {
                    this.section_ss.appendChild(e.target);
                    console.log("this dans img.onclick : ", this);
                    console.log("image cliquée : ", e.target);

                }.bind(this);
            }
        }
        drawSlideshow() {
            console.log("dans drawSlideshow");
            // ajout de la section qui contient le ss
            const section_ss = document.createElement("section");
            section_ss.setAttribute("id", "section-ss");
            section_ss.setAttribute("style", 
                "border: 1px solid red; width: 300px; height:200px; overflow:hidden;");
            document.body.appendChild(section_ss);

            return section_ss;
        }
    }
    const ss = new Slideshow("https://picsum.photos/v2/list?page=1&limit=5");
    console.log(ss);
}