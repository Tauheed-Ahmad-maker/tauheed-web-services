const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const formMessage = document.getElementById("form-message");

formMessage.textContent =
    "Thank you! Your message has been received. I will get back to you soon.";

formMessage.style.display = "block";

    contactForm.reset();

});

const topButton = document.getElementById("back-to-top");

// Show button when visitor scrolls down

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

// Scroll to top when button is clicked

topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

alert("JavaScript is working!");

function showService(serviceName) {
    alert("You selected: " + serviceName);
}

function showProject(projectName) {

    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const technologies = document.getElementById("modal-technologies");

    title.textContent = projectName;

    technologies.innerHTML = "";

    if (projectName === "Business Website") {

        description.textContent =
            "A professional website designed for a business to present its services, information and online presence.";

        technologies.innerHTML =
            '<span class="tech">HTML</span>' +
            '<span class="tech">CSS</span>' +
            '<span class="tech">JavaScript</span>';

    }

    else if (projectName === "Personal Portfolio") {

        description.textContent =
            "A personal portfolio website for displaying skills, projects and professional information.";

        technologies.innerHTML =
            '<span class="tech">HTML</span>' +
            '<span class="tech">CSS</span>' +
            '<span class="tech">JavaScript</span>';

    }

    else if (projectName === "Landing Page") {

        description.textContent =
            "A focused landing page designed to present a product or service clearly and attract visitors.";

        technologies.innerHTML =
            '<span class="tech">HTML</span>' +
            '<span class="tech">CSS</span>';

    }

    modal.style.display = "flex";
}

const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", function() {

    document.getElementById("project-modal").style.display = "none";

});

const projectModal = document.getElementById("project-modal");

projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {
        projectModal.style.display = "none";
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        projectModal.style.display = "none";
    }

});
