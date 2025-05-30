// changing word 
const word = ['web devloper', 'front-end devloper', 'back-end devloper'];
let changing_word = document.querySelector('#changing_word');

let inx = 0;

const update_word = () => {
    changing_word.classList.add('hiden');
    changing_word.classList.remove('show');
    setTimeout(() => {
        changing_word.classList.add('show');
        changing_word.classList.remove('hiden');

        inx = (inx + 1) % word.length;
        changing_word.textContent = word[inx] + ' !';
    }, 1000);

}

setInterval(update_word, 4000);

// scroll into view 

const scrollbtn =(id)=>{
document.getElementById(id).scrollIntoView({
    behavior:'smooth',
})
}

async function fatchDta() {
    await fetch("files/nav.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("nav").innerHTML = data;
      console.log(data);
      
    });
}

fatchDta();