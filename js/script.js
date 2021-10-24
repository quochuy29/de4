$(document).ready(function() {
    $('.category-product-item').click(function(e) {
        e.preventDefault();
        $(this).find('.category-content').toggle('show');
    });
    let navbar = document.querySelector('.navbar');
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        navbar.classList.toggle('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function(e) {
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    });
});