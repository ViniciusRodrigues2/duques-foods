(()=>{

  const menuActive = document.querySelector('.nav');

  const viewMenu = ()=>{
  const dropMenu = document.querySelector('.navMobile');
  let view = 'viewMenu';
        if(dropMenu.classList.contains(`${view}`)){
            dropMenu.classList.remove(`${view}`);
            document.body.style.overflowY = 'initial'
        }else{
            dropMenu.classList.add(`${view}`);
            document.body.style.overflowY = 'hidden'
        }
  }
  menuActive.addEventListener('click',viewMenu)

})();