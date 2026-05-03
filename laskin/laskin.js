window.onload = function () {
    var luku1 = Math.floor(Math.random() * 10) + 1;
    var luku2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("luku1").value = luku1;
    document.getElementById("luku2").value = luku2;
}

function Lisaa(kentta) {
    var id = "luku" + kentta;
    var arvo = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = arvo + 1;
}

function Vahenna(kentta) {
    var id = "luku" + kentta;
    var arvo = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = arvo - 1;
}

function Laske() {
    var luku1 = parseInt(document.getElementById("luku1").value);
    var luku2 = parseInt(document.getElementById("luku2").value);
    var operaattori = document.getElementById("operaattori").value;

    if (isNaN(luku1) || isNaN(luku2)) {
        $("#virheDialog").text("Syötä kelvolliset luvut molempiin kenttiin.");
        $("#virheDialog").dialog({
            modal: true,
            buttons: { "OK": function () { $(this).dialog("close"); } }
        });
        return;
    }

    if (operaattori === "/" && luku2 === 0) {
        $("#virheDialog").text("Virhe: Jakaminen nollalla ei ole sallittua.");
        $("#virheDialog").dialog({
            modal: true,
            buttons: { "OK": function () { $(this).dialog("close"); } }
        });
        return;
    }

    var tulos;
    if (operaattori === "+") {
        tulos = luku1 + luku2;
    } else if (operaattori === "-") {
        tulos = luku1 - luku2;
    } else if (operaattori === "*") {
        tulos = luku1 * luku2;
    } else if (operaattori === "/") {
        tulos = luku1 / luku2;
    }

    document.getElementById("tulos").textContent = tulos;
}
