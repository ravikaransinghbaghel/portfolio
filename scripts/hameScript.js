async function loadHtml(id,url) {

   await fetch(`files/${url}`)
        .then(res => res.text())
        .then(data => {
            document.getElementById(`${id}`).innerHTML = data;

        });
}



// author img 

 function ravi_img() {
     const raviImg = document.querySelectorAll('.ravi_img')
     raviImg.forEach(item=>item.src ="../picture/ravi.png")
     
}

ravi_img()

