let main = document.geElementById('main');
main.remove();
let newHeader=document.createElement('h1');
newHeader.id="victory";
newHeader.innerHTML="NAME is the champion";
document.body.appendChild(newHeader);

