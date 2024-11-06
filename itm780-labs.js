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
    // Hide all sections initially
    const sections = document.querySelectorAll(".bio-section, .socials-section, .proficiencies-skills-container, #education-section, #job-section");
    sections.forEach(section => section.style.display = "none");

    // Function to display specific sections based on IDs
    function showSection(...sectionIds) {
        // Hide all sections
        sections.forEach(section => section.style.display = "none");

        // Display only the selected sections
        sectionIds.forEach(id => {
            const section = document.getElementById(id) || document.querySelector(`.${id}`);
            if (section) section.style.display = "block";
        });
    }

    // Add event listeners to nav links
    document.querySelector("nav").addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const sectionIdMap = {
                "apple": ["bio-section"],
                "mango": ["proficiencies-section", "skills-section"],
                "orange": ["education-section", "job-section"],
                "cherry": ["socials-section"]
            };
            const href = event.target.getAttribute("href").replace("#", "");
            const sectionIds = sectionIdMap[href];
            if (sectionIds) {
                showSection(...sectionIds);
            }
        }
    });
});

