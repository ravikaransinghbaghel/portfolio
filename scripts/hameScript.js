fetch("files/home.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("home").innerHTML = data;

    });

fetch("files/about.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("about").innerHTML = data;

    });

fetch("files/contact.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("contact").innerHTML = data;

    });

fetch("files/skill.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("skill").innerHTML = data;

    });
fetch("files/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;

    });


