//index.html
function myFunction() {
    alert("Hello!");
}

document.getElementById('myButton1').addEventListener('click', function () {
    alert('Button 1 clicked!');
});

document.getElementById('myButton2').addEventListener('click', function () {
    alert('Button 2 clicked!');
});

document.getElementById('myButton1').addEventListener('mouseover', function () {
    this.innerHTML = "Thank You";
    this.style.color = "blue";
});

document.getElementById('myButton2').addEventListener('mouseout', function () {
    this.innerHTML = "Mouse Over Me";
    this.style.color = "orange";
});

//menu bar//
document.addEventListener("DOMContentLoaded", function () {
    // Hide all sections except the first one (optional)
    const sections = document.querySelectorAll(".bio-section, .proficiencies-skills-container, .job-experience");
    sections.forEach(section => section.style.display = "none");

    // Function to display a section based on the id
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => section.style.display = "none");

        // Display the selected section
        document.getElementById(sectionId).style.display = "block";
    }

    // Add event listeners to nav links
    document.querySelector("nav").addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const sectionIdMap = {
                "apple": "job-experience",
                "mango": "bio-section",
                "orange": "proficiencies-skills-container",
                // Add more mappings if needed
            };
            const sectionId = sectionIdMap[event.target.getAttribute("href").replace("/", "")];
            if (sectionId) {
                showSection(sectionId);
            }
        }
    });
});