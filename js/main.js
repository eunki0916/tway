
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
head_m.addEventListener('mouseover', () => {
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
/* 메뉴 클릭 */ 
menu.onclick = function () {
    document.querySelector('body').style.overflow = "hidden";
    document.querySelector('.dark').style.display = "block";
    menu_close.style.display = "block";
    document.querySelector('.all_menu_wrap').style.display = "block";
}
menu_close.onclick = function () {
    document.querySelector('.dark').style.display = "none";
    menu_close.style.display = "none";
    document.querySelector('.all_menu_wrap').style.display = "none";
    document.querySelector('body').style.overflow = "initial";
}
// num 변수
let num = 0;

/* 조회 클릭이벤트 */
let reserve_click = document.querySelectorAll('.reserve_a a');

reserve_click.forEach(function (aa, bb) {
    aa.onclick = function () {
        reserve_click[num].classList.remove('reserve_a_click');
        this.classList.add('reserve_a_click');
        num = bb;
    }
});

/*푸터*/
let arr = document.querySelector('.arr');
let m_footer = document.querySelector('.m_footer_bot');

arr.onclick = function () {
    if (num == 0) {
        arr.style.rotate = "180deg";
        m_footer.classList.add('block');
        num = 1;
    } else {
        arr.style.rotate = "0deg";
        m_footer.classList.remove('block');
        num = 0;
    }
}

/* 모바일 헤더 */ 
let service_trip_arr = document.querySelector('.service_trip_arr');
let service_trip = document.querySelector('.service_trip');
let service_air_arr = document.querySelector('.service_air_arr');
let service_air = document.querySelector('.service_air');
let service_plus_arr = document.querySelector('.service_plus_arr');
let service_plus = document.querySelector('.service_plus');
let service_jim_arr = document.querySelector('.service_jim_arr');
let service_jim = document.querySelector('.service_jim');
let service_in_arr = document.querySelector('.service_in_arr');
let service_in = document.querySelector('.service_in');
let service_category_arr = document.querySelector('.store_category_arr');
let store_category = document.querySelector('.store_category');
let service_order_arr = document.querySelector('.store_order_arr');
let store_order = document.querySelector('.store_order');
let service_faq_arr = document.querySelector('.store_faq_arr');
let store_faq = document.querySelector('.store_faq');
let service_coupon_arr = document.querySelector('.event_coupon_arr');
let event_coupon = document.querySelector('.event_coupon');
let menu_li = document.querySelector('.menu_click');

service_trip_arr.onclick = function () {
    service_trip.classList.toggle('block');
    service_trip_arr.classList.toggle('updown');
}
service_air_arr.onclick = function () {
    service_air.classList.toggle('block');
    service_air_arr.classList.toggle('updown');
}
service_plus_arr.onclick = function () {
    service_plus.classList.toggle('block');
    service_plus_arr.classList.toggle('updown');
}
service_jim_arr.onclick = function () {
    service_jim.classList.toggle('block');
    service_jim_arr.classList.toggle('updown');
}
service_in_arr.onclick = function () {
    service_in.classList.toggle('block');
    service_in_arr.classList.toggle('updown');
}
service_category_arr.onclick = function () {
    store_category.classList.toggle('block');
    service_category_arr.classList.toggle('updown');
}
service_order_arr.onclick = function () {
    store_order.classList.toggle('block');
    service_order_arr.classList.toggle('updown');
}
service_faq_arr.onclick = function () {
    store_faq.classList.toggle('block');
    service_faq_arr.classList.toggle('updown');
}
service_coupon_arr.onclick = function () {
    event_coupon.classList.toggle('block');
    service_coupon_arr.classList.toggle('updown');
}