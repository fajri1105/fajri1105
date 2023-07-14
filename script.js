const selengkapnya = document.querySelectorAll('.portofolioSelengkapnya');

selengkapnya.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.previousElementSibling.classList.toggle('s-d-block');
    });
});