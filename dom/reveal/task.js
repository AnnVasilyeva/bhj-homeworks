
document.addEventListener('scroll', function () {
    let reveals = document.querySelectorAll('.reveal');
    let viewportHeight = window.innerHeight;

   for (let i = 0; i < reveals.length; i++) {
       let revealTop = reveals[i].getBoundingClientRect().top;
       let revealBottom = reveals[i].getBoundingClientRect().bottom;

       if (revealTop < viewportHeight) {
               reveals[i].classList.add('reveal_active');
           }
       if (revealBottom === 0) {
           reveals[i].classList.remove('reveal_active');
       }
   }
});

