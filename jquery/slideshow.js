jQuery(function ($) {
    // variable boolean qui permet de savoir si le slideshow tourne ou s'il est arrêté 
    let is_running = false;

    // Création des boutons qui indiquent le nombre d'images et la quelle
    // est actuellement visible
    let nb_img = $("#diapo > img").length;
    console.log("nbre d'images : ", nb_img);

    for (let i = 0; i < nb_img; i++) {
        let selected = (i) ? "not-selected" : "selected"
        $('<button class="btn-number ' + selected + '">' + (i + 1) + "</button>").appendTo("#controls");
    }


    // création du bouton go et ajout après l'élément d'id diapo puis ajout du gestion d'événement
    // click qui appellera la fonction nextSlide
    const go_button = $("<button>Go</button>")
        .prependTo("#controls")
        .on("click", function () {
            // dans le cas où le slideshow était arrêté, on le démare 
            if (!is_running) {
                is_running = true;
                $(this).text("Stop");
                nextSlide();
            } else { // on arrête le slideshow grâce à la variable "is_running"
                $(this).text("Go");
                is_running = false;
            }
        });

    // fonction récursive. C'est une fonction qui s'appelle elle même
    function nextSlide() {
        setTimeout(function () {
            if (is_running) { // teste de la variable "is_running"
                // sélectionne la première image et la place en dernier élément
                // du div d'id diapo
                $("#diapo img:first").appendTo("#diapo");

                // on récupère l'index du bouton qui a la classe "selected", on lui enlève selected
                // et on ajoute la class selected au bouton suivant

                // on va chercher le bouton qui appartient à la classe "selected"
                let button_selected = $(".selected"); 

                 // on récupère l'index du bouton  qui appartient à la classe "selected"
                let selected_index = $(".btn-number").index(button_selected);
                console.log("index du bouton selected", selected_index);

                // Calculer l'index du bouton suivant le bouton "selected" à l'aide de l'opérateur "modulo"
                next_index = (selected_index + 1) % 3;
                console.log("index du bouton suivant", next_index);

                $(".btn-number").each(function(index) {
                    if(index == selected_index) $(this).removeClass("selected").addClass("not-selected");
                    if(index == next_index) $(this).removeClass("not-selected").addClass("selected");
                });

                // appel récursif (toutes les 3 secondes)
                nextSlide();
            }

        }, 1000);
    }

});

// Autre façon de faire Associer un objet du dom à un autre objet du dom via un tableau
[
    [{//ojet du dom imgage}, {//objet du dom bouton}]
]
