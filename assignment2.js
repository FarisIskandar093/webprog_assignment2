document.querySelectorAll('.options a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.options a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -120;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentId = '';
    sections.forEach(section => {
        const top = section.offsetTop - 80;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            currentId = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.options a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentId) {
            link.classList.add('active');
        }
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.options').classList.toggle('show');
});
