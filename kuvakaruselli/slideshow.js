var kaupungit = [
    {
        title: "Kultainennoutaja",
        date: "Ryhmä: Noutajat",
        content: "Kultainennoutaja on ystävällinen ja helläluonteinen koirarotu. Se on erittäin suosittu perhekoira ja sopii hyvin lapsiperheiden lemmikiksi. Rotu on älykäs ja helposti koulutettava.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Retriever_in_nom_de_plume.jpg"
    },
    {
        title: "Saksanpaimenkoira",
        date: "Ryhmä: Paimenkoirat",
        content: "Saksanpaimenkoira on yksi maailman tunnetuimmista koiraroduista. Sitä käytetään laajasti poliisi- ja pelastuskoirana sen älykkyyden ja oppimiskyvyn ansiosta.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Shepherd_Dog_with_disc.jpg"
    },
    {
        title: "Labradorinnoutaja",
        date: "Ryhmä: Noutajat",
        content: "Labradorinnoutaja on Suomen suosituin koirarotu. Se on iloinen, energinen ja erittäin sosiaalinen koira. Labradoreita käytetään myös opaskoirina ja pelastuskoirina.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Labrador_Retriever_portrait.jpg"
    },
    {
        title: "Siperianhuski",
        date: "Ryhmä: Arktiset koirat",
        content: "Siperianhiski on alkujaan Siperiasta kotoisin oleva rekikoirarotu. Se tunnetaan sinisistä tai monivärikkäistä silmistään ja paksuista turkeistaan, jotka suojaavat kovalta pakkaselta.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Siberian-husky.jpg"
    },
    {
        title: "Bordercollie",
        date: "Ryhmä: Paimenkoirat",
        content: "Bordercollie on yleisesti pidetty älykkäimpänä koirarotuna maailmassa. Se on syntynyt paimentamaan lampaita ja tarvitsee paljon liikuntaa ja henkistä stimulaatiota.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Border_Collie_600.jpg"
    }
];

var nykyinenIndeksi = 0;
var interval = null;
var isPlaying = true;

window.onload = function () {
    var tallennettu = localStorage.getItem("slideIndeksi");
    if (tallennettu !== null) {
        nykyinenIndeksi = parseInt(tallennettu);
    }
    NaytaSisalto(nykyinenIndeksi);
    KaynnistaSlidShow();
}

function NaytaSisalto(indeksi) {
    var kohde = kaupungit[indeksi];
    $("#media").fadeOut(300, function () {
        document.getElementById("kuva").src = kohde.image;
        document.getElementById("otsikko").textContent = kohde.title;
        document.getElementById("paivamaara").textContent = kohde.date;
        document.getElementById("sisalto").textContent = kohde.content;
        document.getElementById("indeksiNaytto").textContent = (indeksi + 1) + " / " + kaupungit.length;
        $("#media").fadeIn(300);
    });
    localStorage.setItem("slideIndeksi", indeksi);
}

function Seuraava() {
    nykyinenIndeksi = nykyinenIndeksi + 1;
    if (nykyinenIndeksi >= kaupungit.length) {
        nykyinenIndeksi = 0;
    }
    NaytaSisalto(nykyinenIndeksi);
}

function Edellinen() {
    nykyinenIndeksi = nykyinenIndeksi - 1;
    if (nykyinenIndeksi < 0) {
        nykyinenIndeksi = kaupungit.length - 1;
    }
    NaytaSisalto(nykyinenIndeksi);
}

function KaynnistaSlidShow() {
    interval = window.setInterval(function () {
        Seuraava();
    }, 4000);
    isPlaying = true;
    document.getElementById("playNappi").innerHTML = "&#9646;&#9646; Pysäytä";
}

function PysaytaSlidShow() {
    window.clearInterval(interval);
    interval = null;
    isPlaying = false;
    document.getElementById("playNappi").innerHTML = "&#9654; Toista";
}

function TogglePlay() {
    if (isPlaying) {
        PysaytaSlidShow();
    } else {
        KaynnistaSlidShow();
    }
}