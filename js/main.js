
let head_m = document.getElementById('top'); 
let img = document.querySelector('.logo_img');
let gnb = document.querySelector('.gnb');
let login = document.querySelector('.login_login');
let search = document.querySelector('.login_search');
let menu = document.querySelector('.login_menu');
let lang = document.querySelector('.lang');
let header_bg = document.querySelector('.header_bg');
let menu_close = document.querySelector('.menu_close');
 /* 헤더 스크롤 */
window.addEventListener('scroll', e => {

    if (document.documentElement.scrollTop > 50) {
        img.setAttribute('src', 'img/top_logo2.png')
        head_m.classList.add('top_scroll');
        gnb.classList.add('header_wrap_scroll');
        login.setAttribute('src', 'img/icon/ico_top_login.png')
        search.setAttribute('src', 'img/icon/ico_top_search.png')
        menu.setAttribute('src', 'img/icon/ico_top_allmenu.png')
        lang.classList.add('header_wrap_scroll');
        header_bg.classList.add('header_bg_scroll');
    } else {
        img.setAttribute('src', 'img/top_logo1.png')
        head_m.classList.remove('top_scroll');
        gnb.classList.remove('header_wrap_scroll');
        login.setAttribute('src', 'img/ico_top_login.png')
        search.setAttribute('src', 'img/ico_top_search.png')
        menu.setAttribute('src', 'img/ico_top_allmenu.png')
        lang.classList.remove('header_wrap_scroll');
        header_bg.classList.remove('header_bg_scroll');
    }
});
/*헤더 마우스*/ 
head_m.addEventListener('mouseover', ()=> {
        img.setAttribute('src', 'img/top_logo2.png')
        head_m.classList.add('top_scroll');
        gnb.classList.add('header_wrap_scroll');
        login.setAttribute('src', 'img/icon/ico_top_login.png')
        search.setAttribute('src', 'img/icon/ico_top_search.png')
        menu.setAttribute('src', 'img/icon/ico_top_allmenu.png')
        lang.classList.add('header_wrap_scroll');
        header_bg.classList.add('header_bg_scroll');
});
head_m.addEventListener('mouseout', () => {
        img.setAttribute('src', 'img/top_logo1.png')
        head_m.classList.remove('top_scroll');
        gnb.classList.remove('header_wrap_scroll');
        login.setAttribute('src', 'img/ico_top_login.png')
        search.setAttribute('src', 'img/ico_top_search.png')
        menu.setAttribute('src', 'img/ico_top_allmenu.png')
        lang.classList.remove('header_wrap_scroll');
        header_bg.classList.remove('header_bg_scroll');
});
menu.onclick = function() {
    document.querySelector('body').style.overflow = "hidden";
    document.querySelector('.dark').style.display = "block";
    menu_close.style.display = "block";
    document.querySelector('.all_menu_wrap').style.display = "block";
}
menu_close.onclick = function() {
    document.querySelector('.dark').style.display = "none";
    menu_close.style.display = "none";
    document.querySelector('.all_menu_wrap').style.display = "none";
    document.querySelector('body').style.overflow = "initial";
}