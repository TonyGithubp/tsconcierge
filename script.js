function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// This part makes clicked menu turn light green (as per '.menu ul li a.active' class in CSS)   
// and then navigate to the coressponding page be it About, Home, etc.
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.href; // Get the current page's URL
    const menuLinks = document.querySelectorAll(".menu a");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // No need to prevent default behavior here
            
            // Remove the 'active' class from all menu items
            menuLinks.forEach(item => item.classList.remove("active"));
            // Add the 'active' class to the clicked menu item
            this.classList.add("active");
        });
        
        // Check if the link's href matches the current page's URL
        if (link.href === currentPage) {
            link.classList.add("active");
        }
    });
});


