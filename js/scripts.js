function toggle(div1, div2) {
    const styleOne = document.getElementById(div1).style.display
    const styleTwo = document.getElementById(div2).style.display
    document.getElementById(div1).style.display = styleTwo
    document.getElementById(div2).style.display =  styleOne
}
$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
$('.submit').click(function () {
        var Name = $('#mce-FNAME').val();
        var Email = $('#mce-EMAIL').val();
        var Message = $('#mce-MESSAGE');
        var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });
  