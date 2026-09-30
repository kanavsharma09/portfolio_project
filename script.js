// Contact form validation

const forms = document.querySelectorAll("form");

forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {

        const name = form.querySelector("#Name");
        const email = form.querySelector("#Email");
        const message = form.querySelector("#Message");

        if (
            name &&
            email &&
            message &&
            (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            )
        ) {
            event.preventDefault();
            alert("Please fill in all the fields.");
        }
    });
});
