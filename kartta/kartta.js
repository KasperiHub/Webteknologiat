window.onload = function () {
    var address = "Yliopistonkatu 36 ";
    var city = "Lappeenranta";
    document.getElementById("kartta").src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
}

function HaeKartta() {
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    document.getElementById("kartta").src = 'https://www.google.com/maps?q=' + address + ' ' + city + '&output=embed';
}
