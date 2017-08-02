import $ from "jquery"
import validation from 'jquery-validation'

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
  }
})
})


