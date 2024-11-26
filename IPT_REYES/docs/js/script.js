//navbar
function hamburg(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="translateY(0px)"
}

function cancel(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="translateY(-500px)"
}
//type writer

const text= [ 
    "Artist",
    "Designer",
    "Developer"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typewriter(){
    if (charcterIndex<text[textIndex].length){
        textElements.innerHTML += text[textIndex].charAt(charcterIndex);
        charcterIndex ++;
        setTimeout(typewriter,speed);
    }
    else{
        setTimeout(eraseText,1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50)
    }
    else{
        textIndex = (textIndex + 1) % text.length;
        charcterIndex = 0;
        setTimeout(typewriter,500)
    }
}

window.onload = typewriter;

//form message

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_pjtamnh';
   const templateID = 'template_cowl2ls';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
