$(function () {
  $(".modal .delete").on("click",function () {
    const modal = $(this).data("modal");
    $(modal).removeClass("is-active");
  });


  $(".modal_btn").on("click", function () {
    const modal = $(this).data("modal");
    console.log(modal);
    $(modal).addClass("is-active");
  });
});
