document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const formData = new FormData(contactForm);

    // Convert FormData to object
    const formDataObject = {};
    formData.forEach(function (value, key) {
      formDataObject[key] = value;
    });

    // Save form data to localStorage
    localStorage.setItem("contactFormData", JSON.stringify(formDataObject));

    // Optionally, you can also reset the form after saving data
    contactForm.reset();

    alert("Form data saved!");
  });

  // Optionally, you can prefill the form fields if data is available in localStorage
  const savedFormData = localStorage.getItem("contactFormData");
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    document.getElementById("name").value = parsedFormData["name"] || "";
    document.getElementById("email").value = parsedFormData["email"] || "";
    document.getElementById("message").value = parsedFormData["message"] || "";
  }
});
