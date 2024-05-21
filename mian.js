$(document).ready(function () {
    $("#iconburg").click(function () {
        $("#navbaar").toggle();
        $(".home-sci").toggleClass("padding-top-150");
    });


});


// let scrollBtn = document.getElementById('scrollBtn');

// window.onscroll = function () {
//     if (scrollY >= 490) {
//         scrollBtn.style.display = 'block';
//     }
//     else {
//         scrollBtn.style.display = 'none';
//     }
// }
// scrollBtn.onclick = function () {
//     scroll({
//         left: 0,
//         top: 0,
//         behavior: "smooth"
//     })
// }





$(document).ready(function () {
    $(".contactme").click(function () {
        // Vérifie si tous les champs d'entrée sont vides
        var inputsAreEmpty = true;
        $("input").each(function () {
            if ($(this).val() !== "") {
                inputsAreEmpty = false;
                return false;
            }
        });

        if (inputsAreEmpty) {
            $("#success-message").text("Enter your Informations !");
        } else {

            $("#success-message").text("");
            $("input").val("");

            setTimeout(function () {
                $("#success-message").text("Message sent Successfully !");
            }, 1500);
        }
    });
});


var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})




const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});



