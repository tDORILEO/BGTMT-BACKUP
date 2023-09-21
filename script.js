function redirecionarLinkedIn() {
    window.location.href = "https://www.linkedin.com/company/bgmt-green/";
}

function redirecionarInstagram() {
    window.location.href = "https://instagram.com/bgmtgreen?igshid=MzNlNGNkZWQ4Mg==";
}

function redirecionarWhatsApp() {
    window.location.href = "https://static.vecteezy.com/system/resources/previews/000/407/894/original/red-coming-soon-neon-icon-vector.jpg";

}

var emailLink = document.getElementById("emailLink");
var destinatario = "BGMTgreen@gmail.com";

emailLink.addEventListener("click", function () {
    var link = "mailto:" + destinatario;
    window.location.href = link;
});

$('.slider-home').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});

function redirecionarNotificacao() {
    window.location.href = "notificacao.html";
}

function redirecionarPerfil() {
    window.location.href = "perfil.html";
}