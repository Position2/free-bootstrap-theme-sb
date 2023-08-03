$(document).ready(function() {
  // banner slider 
  var owl = $('#BannerSlider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true
});
  // sticky header
  $(document).on("scroll", function() {
    if ($(this).scrollTop() > 1) {
        $('body').addClass("sticky");
    } else {
        $('body').removeClass("sticky");
    }
});
  // smooth scroll
  $(document).on("click", ".smooth-scroll", function(event) {
    event.preventDefault();
    var target = $(this).attr("href"),
        scrollTo = $(target).offset().top,
        headerHeight = $('#Header').outerHeight();

    $('html, body').animate({ scrollTop: scrollTo - headerHeight });
    $('#nav-icon1').trigger("click");
    $("body").removeClass("menu-active");
});
  //menu icon animation
  $(document).on("click", "#nav-icon1", function() {
    $(this).toggleClass('open');
    $("body").toggleClass("menu-active");
});
  //menu link click
  // magnific video popup  
  $('.popup-youtube-wst').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
});
  // contact form script
  $(document).on("blur", ".form-wrap input, .form-wrap textarea, .email-box input", function() {
    var tmpval = $(this).val();
    if (tmpval === '') {
        $(this).addClass('empty').removeClass('not-empty');
    } else {
        $(this).addClass('not-empty').removeClass('empty');
    }
});
  // Our Work filter
  $(document).on("click", "#OurWork .filter-list ul li", function() {
    var dis = $(this),
        disFilter = dis.data("filter"),
        finalFilter = disFilter == "all" ? "*" : "." + disFilter;

    dis.addClass('active').siblings().removeClass('active');
    $("#OurWork .filter-box .each-box").hide().filter(finalFilter).show();
});
});