document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return; 

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const name = (
      document.getElementById("name") as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const phone = (
      document.getElementById("contact") as HTMLInputElement
    ).value.trim();
    const subject = (
      document.getElementById("subject") as HTMLInputElement
    ).value.trim();
    const message = (
      document.getElementById("message") as HTMLTextAreaElement
    ).value.trim();

    if (!name || !email || !message) {
      alert("Name, email, and message are required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        alert("Form Submitted Successfully!");
        form.reset(); 
        console.log("Response from server:", xhr.responseText); 
      } else {
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
