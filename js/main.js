/*header*/
window.addEventListener('scroll', e => {
    let img = document.querySelector('.logo_img');
    let top = document.getElementById('top');
    let gnb = document.querySelector('.gnb');
    let login = document.querySelector('.login_login');
    let search = document.querySelector('.login_search');
    let menu = document.querySelector('.login_menu');
    let lang = document.querySelector('.lang');
    let header_bg = document.querySelector('.header_bg');
    if (document.documentElement.scrollTop > 50) {
        img.setAttribute('src', 'img/top_logo2.png')
        top.classList.add('top_scroll');
        gnb.classList.add('header_wrap_scroll');
        login.setAttribute('src', 'img/icon/ico_top_login.png')
        search.setAttribute('src', 'img/icon/ico_top_search.png')
        menu.setAttribute('src', 'img/icon/ico_top_allmenu.png')
        lang.classList.add('header_wrap_scroll');
        header_bg.classList.add('header_bg_scroll');
    } else {
        img.setAttribute('src', 'img/top_logo1.png')
        top.classList.remove('top_scroll');
        gnb.classList.remove('header_wrap_scroll');
        login.setAttribute('src', 'img/ico_top_login.png')
        search.setAttribute('src', 'img/ico_top_search.png')
        menu.setAttribute('src', 'img/ico_top_allmenu.png')
        lang.classList.remove('header_wrap_scroll');
        header_bg.classList.remove('header_bg_scroll');
    }
});