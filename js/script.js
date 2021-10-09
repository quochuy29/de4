$(document).ready(function() {
    // $('.web-info-button').click(function(e) {
    //     e.preventDefault();
    //     $(this).find('.info-content').toggle('show');
    //     //find là tìm tới nhiều lớp con
    //     //this là con trỏ hiện tại
    //     $(this).siblings().toggle('hide');
    //     //siblings trỏ tới lớp khác giống nó
    //     // nếu k phải nó thì sẽ hide là ẩn
    // });
    // let navbar = document.querySelector('.navbar');
    // $('.nav-icon').click(function(e) {
    //     e.preventDefault();
    //     navbar.classList.toggle('active');
    // });
    let navbar = document.querySelector('.navbar');
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        navbar.classList.toggle('active');
        // $('.cover').addClass('active');
    });
});