var hakuLaskuri = 0;

function HaeJoke() {
    $("#spinner").show();
    $("button").prop("disabled", true);

    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            hakuLaskuri = hakuLaskuri + 1;
            document.getElementById("laskuri").textContent = hakuLaskuri;

            LisaaAccordion(data.value, hakuLaskuri);

            $("#accordion-osio").show();
            $("#spinner").hide();
            $("button").prop("disabled", false);
        })
        .catch(function (virhe) {
            $("#spinner").hide();
            $("button").prop("disabled", false);
            alert("Haku epäonnistui: " + virhe);
        });
}

function LisaaAccordion(teksti, numero) {
    var itemId = "joke-item-" + numero;
    var headingId = "heading-" + numero;
    var collapseId = "collapse-" + numero;

    var auki = numero === 1 ? "" : "collapsed";
    var nakyva = numero === 1 ? "show" : "";

    var html = '<div class="accordion-item" id="' + itemId + '">'
        + '<h2 class="accordion-header" id="' + headingId + '">'
        + '<button class="accordion-button ' + auki + '" type="button"'
        + ' data-bs-toggle="collapse" data-bs-target="#' + collapseId + '">'
        + 'Fakta #' + numero
        + '</button>'
        + '</h2>'
        + '<div id="' + collapseId + '" class="accordion-collapse collapse ' + nakyva + '"'
        + ' data-bs-parent="#jokeAccordion">'
        + '<div class="accordion-body">' + teksti + '</div>'
        + '</div>'
        + '</div>';

    $("#jokeAccordion").prepend(html);
}
