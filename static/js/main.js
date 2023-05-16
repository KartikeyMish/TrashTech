$(document).ready(function () {
      $('.hero-image').attr({
        "data-aos": "fade left",
        "data-aos-duration": "2000"
    });
    setTimeout(() => {
        AOS.init();
    }, 120);

    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {   
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#file").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);

    });
    // aos animation
    $(document).ready(function () {
      
   });
  
   //refresh animations
   $(window).on('load', function() {
      AOS.refresh();
   });
    // paralaxx effect
    window.addEventListener("scroll", function() {
        var parallaxSection = document.getElementById("home");
        var yPos = window.pageYOffset;
        parallaxSection.style.backgroundPositionY = -yPos * 0.5 + "px";
      });
      
    // navbar scroll fading animation
    const navE1 = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 500) {
        navE1.classList.add('navbar_scrolled');
      }
      else {
        if(window.scrollY < 500) {
          navE1.classList.remove('navbar_scrolled'); 
        }
      }
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Category of Waste :  ' + data);
                console.log('Success!');
            },
        });
    });
    
    // Transition effect for navbar 
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 500) { 
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
      });
      (function() {
  
        'use strict';
      
        $('.input-file').each(function() {
          var $input = $(this),
              $label = $input.next('.js-labelFile'),
              labelVal = $label.html();
          
         $input.on('change', function(element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
         });
        });
      
      })();
      $('.file-upload').file_upload();
      $(document).ready(function () {
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
      });

});
