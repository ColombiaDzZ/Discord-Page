window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('main section');
    
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {

            section.classList.add('fade-in');
        } else {

            section.classList.remove('fade-in');
        }
    });
});