const form = document.querySelector("#subscribe");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var subscribe__email = document.getElementById("email").value;

    var subscribe = `New subscriber Email:<b>${subscribe__email}</b>`

    var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0";
    var chat_id = '1728443213';
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Subscribe successfully sended!");
    form.reset();
});