document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon i'); // Välj ikon inom .menu-icon
    const navbarContainer = document.querySelector('.header-content .navbar');

    // När hamburgermenynsikon klickas, växla .show-nav klassen och ändra ikon
    menuIcon.addEventListener('click', function() {
        navbarContainer.classList.toggle('show-menu'); // Växlar visning av nav och search-icon

        // Växlar mellan hamburgermenynsikon och stängningsikon
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-x');
        } else {
            menuIcon.classList.remove('fa-x');
            menuIcon.classList.add('fa-bars');
        }
    });

    function checkWindowSize() {
        if (navbarContainer.classList.contains('show-menu') && window.innerWidth >= 992) {
            navbarContainer.classList.remove('show-menu');
            menuIcon.classList.remove('fa-x');
            menuIcon.classList.add('fa-bars');
        }
    }

    // Kör funktionen vid sidladdning och när fönstret ändrar storlek
    window.addEventListener('resize', checkWindowSize);

    // Kör funktionen direkt vid sidladdning
    checkWindowSize();
});
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.main-search');
    const headerSearchIcon = document.querySelector('.header-search');

    // När du klickar på searchIcon
    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Stoppar händelsen från att bubbla upp till dokumentnivå

        if (searchIcon.style.display === 'none') {
            searchIcon.style.display = 'inline-block'; 
            headerSearchIcon.style.display = 'none';
        } else {
            searchIcon.style.display = 'none';
            headerSearchIcon.style.display = 'inline-block';
        }
    });

    // Klick utanför elementen
    document.addEventListener('click', function(event) {
        // Kontrollera om klicket sker utanför searchIcon och headerSearchIcon
        if (!searchIcon.contains(event.target) && !headerSearchIcon.contains(event.target)) {
            searchIcon.style.display = 'inline-block';
            headerSearchIcon.style.display = 'none';
        }
    });
});


// C:\Users\jamho\mariamWinn23\umbraco-inlamning\UmbracoCMS\wwwroot\media\5yso5khp\breadcrumb-left.svg
// C:\Users\jamho\mariamWinn23\umbraco-inlamning\UmbracoCMS\wwwroot\media\xuwb4vzc\breadcrumb-right.svg
// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.querySelector('.navbar');

//     function checkWindowSize() {
//         if (navbar.classList.contains('show-menu') && window.innerWidth >= 992) {
//             navbar.classList.remove('show-menu'); // Ta bort klassen om fönsterbredden är <= 992px
//         }
//     }

//     // Kör funktionen vid sidladdning och när fönstret ändrar storlek
//     window.addEventListener('resize', checkWindowSize);

//     // Kör funktionen direkt vid sidladdning
//     checkWindowSize();
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const searchIcon = document.querySelector('.main-search');
//     const headerSearchIcon = document.querySelector('.header-search');

//     searchIcon.addEventListener('click', function() {

//         if (searchIcon.style.display === 'none') {
//             searchIcon.style.display = 'inline-block'; 
//             headerSearchIcon.style.display = 'none';
//         } else {
//             searchIcon.style.display = 'none';
//             headerSearchIcon.style.display = 'inline-block';
//         }
//     });
// });

// const container = document.querySelector('.partners-images');
// const images = document.querySelectorAll('.partners-images img');

// // Klona alla bilder för att skapa den sömlösa effekten
// images.forEach((img) => {
//     const clone = img.cloneNode(true);
//     container.appendChild(clone);
// });

// // När alla bilder har skrollats, flyttar vi tillbaka animationen till början
// container.addEventListener('animationiteration', () => {
//     container.style.transform = 'translateX(0)';
// });



// const slider = document.querySelector('.recent-projects-items');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return; // Stop the function from running if the mouse is not clicked
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2; // The amount to scroll, you can adjust this value
//     slider.scrollLeft = scrollLeft - walk;
// });
