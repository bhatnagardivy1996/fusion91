$(document).ready(() => {
    if($(window).width() < 768) {
        $(".carousel-item #image1").attr("src", "asset/image/coming soon page 1-mobile.png");
        $(".carousel-item #image1").removeClass("object-fit-cover");

        $(".carousel-item #image2").attr("src", "asset/image/coming soon page 2-mobile.png");
        $(".carousel-item #image2").removeClass("object-fit-cover");

        $(".carousel-item #image3").attr("src", "asset/image/coming soon page 3- mobile.png");
        $(".carousel-item #image3").removeClass("object-fit-cover");
    }
});