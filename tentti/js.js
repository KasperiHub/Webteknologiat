function Hinta() {
    var quantityAnanas = document.getElementById("quantityAnanas").checked ? 1 : 0;
    var quantityAurajuusto = document.getElementById("quantityAurajuusto").checked ? 1 : 0;
    var quantityKinkku = document.getElementById("quantityKinkku").checked ? 1 : 0;
    var quantityTonnikala = document.getElementById("quantityTonnikala").checked ? 1 : 0;
    var quantityPepperoni = document.getElementById("quantityPepperoni").checked ? 1 : 0;
    var koko = parseInt(document.getElementById("koko").value);
    var total = (quantityAnanas + quantityAurajuusto + quantityKinkku + quantityTonnikala + quantityPepperoni) * 2 + koko;

    document.getElementById("orderTotal").textContent = total;
}

function LähetäForm() {
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit();
    frm.reset();
    return false;
}