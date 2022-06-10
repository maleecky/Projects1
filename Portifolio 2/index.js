let menuBtn = document.getElementById('menu_btn');
let menuList = document.getElementById('menu_list');


menuBtn.addEventListener('mouseenter',function(){
      menuBtn.style.animation ="menu_hide 1s linear forwards";
      console.log(menuBtn)
      setTimeout(function(){
        menuList.style.display = "flex"
        menuList.style.animation="menu_show 1s linear forwards"
      },1500)
     
})


menuList.addEventListener('mouseleave',function(){
    menuList.style.animation = "menu_hide 1s linear forwards";
    setTimeout(function(){
        menuBtn.style.dislay= "flex";
        menuBtn.style.animation = "menu_show 1s linear forwards";
    },1500)
})

