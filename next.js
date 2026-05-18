  window.onload = function() {
               const formData = localStorage.getItem('formData');
               const pow = document.getElementById('pow');
               
               if (formData) {
                 pow.innerHTML = formData.split(',').join('<br>'); 
                 pow.innerHTML = DelayNode(formData.split(',').join('<br>'), 1000);
               } else {
               
                   pow.textContent = "No data found. Go back and fill out the form.";
               }
           }

const Btn2 = document.getElementById('btn2');

Btn2.addEventListener('mouseover', function() {
     console.log("Mouse touched the button!");
   
    const container = document.getElementById('container');
    const maxX = container.clientWidth - Btn2.clientWidth - 20;
    const maxY = container.clientHeight - Btn2.clientHeight - 20;

   
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    Btn2.style.left = randomX + 'px';
    Btn2.style.top = randomY + 'px';
});

const btn = document.getElementById('btn');

btn.onclick = function() {

        alert('goodboy u gay ass nigga');
    
    
};
