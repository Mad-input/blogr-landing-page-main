const btnNavMobile = document.getElementById('btnMenuMobile');
const navMobile = document.getElementById('navMobile');
const subMenuMobile = document.getElementById('submenuMobile');
const itemMenu = document.querySelectorAll('.item-list-mobile');



btnNavMobile.addEventListener('click',()=> {
  navMobile.classList.toggle('show')
  btnNavMobile.innerHTML = `<img src="./images/icon-${navMobile.classList.contains('show') ? 'close' : 'hamburger'}.svg" alt="logo">`
})

let height = subMenuMobile.scrollHeight

itemMenu.forEach(item => {
  item.addEventListener('click', ()=> {
    if(item.dataset.menu === subMenuMobile.dataset.menu) {
      if(subMenuMobile.clientHeight == 0) {
        subMenuMobile.style.height = `${height}px`
      }
      else subMenuMobile.style.height = 0
    }
  })
})