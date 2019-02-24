$(document).ready(function() {
    // code lu uniquement une fois le document chargé
    /*let bigger = document.querySelector('.title');
    bigger.addEventListener('mouseover',changesize);
    function changesize(){
      this.style.width = '60%';
      this.style.height = '60%';
    }
    
    color = document.querySelector('.title');
    color.addEventListener('mouseout',movecolor);
    function movecolor(){
      this.style.color = 'white';
      this.style.fontSize = '50px';
    }*/

     

       // fade in .navbar
       
        // fade in .navbar
       $('#navscroll').css('background','none');
            $(window).scroll(function () {
    
                     // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 600) {
                    $('#navscroll').css('background','#b56969');
                } else {
                    $('#navscroll').css('background','none');
                }
            });   
 
   });