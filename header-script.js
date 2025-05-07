function jump(target){
    const mainMenus = document.querySelectorAll(".main-menus li");
    const barMenus = document.querySelectorAll(".tab-bar ul li");
    const contents = document.querySelectorAll('#contents > div');

    mainMenus.forEach(i => {
        i.classList.remove('active')
    })
    barMenus.forEach(i => {
        i.classList.remove('active')
    })
    contents.forEach(i => {
        i.classList.remove('active')
    })
    document.querySelectorAll(target).forEach(i => {
        i.classList.add('active')
    })
}
function generateNumberRow(target, n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
      result += i + " <br>\n";
    }
    document.querySelectorAll(target).forEach(i => {
      i.innerHTML = result;
    });
  }