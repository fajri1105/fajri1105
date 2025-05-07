const side = document.querySelector('.main-left')
const welcomeContent = document.querySelector('.welcome-content')
document.querySelector('.open-side-button').addEventListener('click', function() {
    document.querySelector('.main-right').style.width = '80%'
    side.classList.add('expand')
    side.querySelector('#side').classList.replace('d-flex', 'd-none')
    side.querySelector('#side-expand').classList.replace('d-none', 'd-flex')
    welcomeContent.querySelector('.welcome-main').style.width = '100%'
    welcomeContent.querySelector('.welcome-explore').classList.add('hide')
})
document.querySelector('.close-side-button').addEventListener('click', function() {
    side.classList.remove('expand')
    side.querySelector('#side-expand').classList.replace('d-flex', 'd-none')
    side.querySelector('#side').classList.replace('d-none', 'd-flex')
    document.querySelector('.main-right').style.width = '97%'
    welcomeContent.querySelector('.welcome-main').style.width = '80%'
    welcomeContent.querySelector('.welcome-explore').classList.remove('hide')
})
function toggleElementsByScreenSize() {
    const firstChild = document.body.children[0];
    const secondChild = document.body.children[1];

    if (window.innerWidth >= 768) {
      // Tampilan desktop
      firstChild.classList.add('d-none');
      secondChild.classList.remove('d-none');
    } else {
      // Tampilan kecil (mobile)
      firstChild.classList.remove('d-none');
      secondChild.classList.add('d-none');
    }
  }
  window.addEventListener('load', toggleElementsByScreenSize);
  window.addEventListener('resize', toggleElementsByScreenSize);