$(function () {
    $("#accordion dt").on("click", function () {
        $(this).next().slideToggle();
    });
});