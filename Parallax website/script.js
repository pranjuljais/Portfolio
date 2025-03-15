window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 5) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var sidenav = document.getElementById('sidenav');
    var content = document.querySelector('.content');
  
    menuIcon.addEventListener('click', function() {
      sidenav.style.width = '250px';
      content.style.marginLeft = '250px';
    });
  
    sidenav.addEventListener('click', function() {
      sidenav.style.width = '0';
      content.style.marginLeft = '0';
    });
  });
  