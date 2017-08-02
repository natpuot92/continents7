import $ from "jquery"
import validation from 'jquery-validation'

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
