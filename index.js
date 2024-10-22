document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    if (!form)
        return;
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("contact").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        // Basic validation
        if (!name || !email || !message) {
            alert("Name, email, and message are required fields.");
            return;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        var formData = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        };
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                alert("Form Submitted Successfully!");
                form.reset();
                console.log("Response from server:", xhr.responseText);
            }
            else {
                alert("Submission Failed with status: " + xhr.status);
            }
        };
        xhr.onerror = function () {
            alert("An error occurred during form submission.");
            console.error("Error:", xhr.statusText);
        };
        xhr.open("POST", "https://6717e698b910c6a6e02a8097.mockapi.io/api");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(formData));
    });
});
