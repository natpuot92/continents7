import $ from "jquery"
import validation from 'jquery-validation'
import countries from 'countries.js'
import swal from 'sweetalert2'

countries.map(country => 
  $('.main__form-select').append(`<option value="${country.name}">${country.name}</option>`)
)

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
    const dataArray = $(form).serializeArray()
    let data = {interested: ''};

    dataArray.map(item => { 
      if (item.name === 'visiting') {
        data['interested'] += ' visiting '
      }
      else if (item.name === 'exhibiting') {
        data['interested'] += ' exhibiting '
      }
      else if (item.name === 'sponsoring') {
        data['interested'] += ' sponsoring '
      }
      else {
        data[item.name] = item.value
      }
    });

    console.log(data)

    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: data,
      success: () => swal("Thank you for subscribing!", "We will be contacting you soon for further updates.", "success"),
      error: () => swal("Oops", "Something went wrong", "error"),
    })
  }
})
})

$('.popup__btn-close').click(function () {
  $('.popup').addClass('hidden');
})
