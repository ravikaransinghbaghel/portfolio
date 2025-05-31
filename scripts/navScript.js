async function loadHtml(id, url) {

    await fetch(`files/${url}`)
        .then(res => res.text())
        .then(data => {
            document.getElementById(`${id}`).innerHTML = data;

        });
}

function ravi_img() {
    document.getElementById('ravi_img').src = "../picture/twitter.png"
}


async function init() {

    await loadHtml("nav", "nav.html");
    // await loadHtml("manuItems", "manuItems.html");
    await loadHtml("home", "home.html");
    await loadHtml("about", "about.html");
    await loadHtml("skill", "skill.html");
    await loadHtml("contact", "contact.html");
    await loadHtml("footer", "footer.html");

    // changing word 
    const word = ['web devloper', 'front-end devloper', 'back-end devloper'];
    let changing_word = document.querySelector('#changing_word');

    let inx = 0;

    const update_word = () => {
        if (changing_word) {
            changing_word.classList.add('hiden');
            changing_word.classList.remove('show');
            setTimeout(() => {
                changing_word.classList.add('show');
                changing_word.classList.remove('hiden');

                inx = (inx + 1) % word.length;
                changing_word.textContent = word[inx] + ' !';
                // console.log(word[inx]);

            }, 1000);
        } else {
            console.log('changing word nhi aa rha hai');

        }

    }

    setInterval(update_word, 4000);

    ravi_img()
}

init()

// scroll into view 

const scrollbtn = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
    })
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

      const formData = new FormData(form);

    const response = await fetch("https://script.google.com/macros/s/AKfycbw9a3wnjerXjkqKbv0_7rifJJJFKOAB1mMGxMO5aIarc7cAIBloy728aZn3TyJeZTcM/exec", {
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    document.getElementById("response").innerText = result.status === "success"
        ? "Message sent successfully!"
        : "Failed to send message.";
    // form.reset();
});
