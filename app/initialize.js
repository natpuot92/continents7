import $ from "jquery"
import validation from 'jquery-validation'

var select = $('.main__form-select');

select.click(function() {
  select.removeClass('select-color-white');
  select.addClass('select-color-black');
});

select.change(function() {
  select.removeClass('select-color-black');
  select.addClass('select-color-white');
});



$("#form").validate({
  rules: {
    first_name: {
    required: true
  },
    last_name: {
      required: true,
    },
    email: {
    required: true,
    email: true
    },
    country: {
      required: true
    }
  },
  errorPlacement: function(error, element) {
    return true;
  }
})
