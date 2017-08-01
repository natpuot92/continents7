import $ from "jquery"

var select = $('.main__form-select');

select.click(function() {
  select.removeClass('select-color-white');
  select.addClass('select-color-black');
});

select.change(function() {
  select.removeClass('select-color-black');
  select.addClass('select-color-white');
});
