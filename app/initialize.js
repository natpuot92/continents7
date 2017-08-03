import $ from "jquery"
import validation from 'jquery-validation'
import countries from 'countries.js'
import sweetalert from 'sweetalert'

console.log(countries[1].name);

for (var i = 0; countries.length > i; i++) {
  $('.main__form-select').append('<option' + ' value =' + countries[i].name + '>' + countries[i].name + '</option>');
}

$(document).ready(function(){
  $("#worldmap").find("path").each(function(i, e){
  $(e).css({
    'animationDuration': (Math.floor(Math.random()*2000)+2000)+'ms',
    'animationDelay': (Math.floor(Math.random()*2000))+'ms'
  })
  })

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
  },
  submitHandler: function(form) {
    $('.popup').removeClass('hidden')
  }
})
})

$('.popup__btn-close').click(function () {
  $('.popup').addClass('hidden');
})
