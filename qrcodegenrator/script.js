let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");

function generateQR(){

    if(qrText.value.length > 0){

        qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + encodeURIComponent(qrText.value);

    } else {
        alert("Please enter text or URL");
    }
}