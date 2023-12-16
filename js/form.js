const forms = document.querySelectorAll("#subscribe");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var subscribe__email = form.querySelector("#email").value;
    
        var subscribe = `New subscriber Email:<b>${subscribe__email}</b>`
    
        var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0";
        var chat_id = '1728443213';
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;
    
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
    
        console.log("Subscribe successfully sent!");
        console.log(subscribe__email)
        form.reset();
    }); 
});
