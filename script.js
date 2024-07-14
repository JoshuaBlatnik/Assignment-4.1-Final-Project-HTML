document.addEventListener('DOMContentLoaded', function() { // Waits for the DOM to fully load before running the script
    const sections = document.querySelectorAll('section'); // Selects all section elements on the page
    const footer = document.querySelector('footer'); // Selects the footer element on the page

    const observer = new IntersectionObserver(entries => { // Creates a new IntersectionObserver to observe when elements come into view
        entries.forEach(entry => { // Iterates over each observed entry
            if (entry.isIntersecting) { // Checks if the element is in the viewport
                entry.target.classList.add('visible'); // Adds the 'visible' class to the element
            }
        });
    }, {
        threshold: 0.1 // Sets the threshold for the observer, indicating when 10% of the element is visible
    });

    sections.forEach(section => { // Iterates over each section element
        observer.observe(section); // Observes each section element
    });

    observer.observe(footer); // Observes the footer element
});