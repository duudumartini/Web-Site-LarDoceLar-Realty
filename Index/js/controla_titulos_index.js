document.addEventListener('DOMContentLoaded', function() {
    var tituloBanner = document.getElementById('titulo_banner');
    var subBanner = document.getElementById('sub_banner');
  
    tituloBanner.style.opacity = 1;
    setInterval(function() {       
        subBanner.style.opacity = 1;
    },1000)
    
  });
  