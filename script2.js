function openPopup2() {
    document.getElementById("popup2").style.display = "block";
    document.body.style.overflow = "hidden";
    document.querySelector(".main-content").classList.add("blurred");
}
function closePopup2() {
    document.getElementById("popup2").style.display = "none";
    document.body.style.overflow = "auto";
    document.querySelector(".main-content").classList.remove("blurred");
}
function formsubmit(){
    let inputfield1 = document.querySelector(".namefield");
    let inputfield2 = document.querySelector(".emailfield");
    let inputfield3 = document.querySelector(".mssgfield");
    if (inputfield1.value.trim() === "" && inputfield2.value.trim() === "" && inputfield3.value.trim() === "") {
        let checkMessage = document.querySelector(".submitmssg");
        checkMessage.style.visibility = "visible";
        checkMessage.style.opacity = "1";
        checkMessage.textContent = "Pls fill all the fields first";
        setTimeout(function () {
            checkMessage.style.opacity = "0";
            setTimeout(function () {
                checkMessage.style.visibility = "hidden";
                checkMessage.textContent = "Your Request is Submitted";
            }, 2000);
        }, 5000);
    }else{
        Email.send({
            SecureToken : "8793c9e1-3dcb-4176-839b-847f14e88fed",
            To : 'sahilsharma4281@gmail.com',
            From : 'sahilsharma4281@gmail.com',
            Subject : "New Work",
            Body : "Name = " + inputfield1.value + "<br/> Email = " + inputfield2.value + "<br/> Message = " + inputfield3.value
        }).then(
          message => alert(message)
        );
        var popupMessage = document.querySelector(".submitmssg");
        popupMessage.style.visibility = "visible";
        popupMessage.style.opacity = "1";
        setTimeout(function () {
            popupMessage.style.visibility = "hidden";
            popupMessage.style.opacity = "0";
        }, 5000);
        document.querySelector(".namefield").value = "";
        document.querySelector(".emailfield").value = "";
        document.querySelector(".mssgfield").value = "";
    }
}
function redirectToPage(pageUrl) {
    window.open(pageUrl, '_blank');
}
function redirectToPage1(pageUrl) {
    window.location.href = pageUrl;
}