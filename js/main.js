$(document).ready(function() {
    // code lu uniquement une fois le document chargé
   
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("navscroll").style.top = "0";
      } else {
        document.getElementById("navscroll").style.top = "-50px";
      }
    }

  });