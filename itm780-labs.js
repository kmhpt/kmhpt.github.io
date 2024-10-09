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

