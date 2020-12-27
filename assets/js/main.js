document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus()
  }
});

$(document).ready(function() {
  $('.header').height($(window).height());
});

function formControls() {

const myForm = document.getElementById('contactForm');

function resetForm() {
  if (!myForm) {
    return;
  }
  myForm.reset();
}

window.onload = resetForm;

(function() {
  window.addEventListener(
    'load',
    function() {
      // Fetch the form
      const forms = document.getElementsByClassName('needs-validation');
      // Loop over to prevent submission
      const validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          'submit',
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
})();
}

$( document ).ready(function() {
$('img').closest('a').addClass("no-tag");
});

$( document ).ready(function() {
$('a[href$="pdf"]:not(.no-tag)').prepend(`<i class="far fa-file-pdf"></i>`).addClass("no-style");
$('a[href$="doc"]:not(.no-tag)').prepend(`<i class="far fa-file-word"></i>`).addClass("no-style");
$('a[href$="docx"]:not(.no-tag)').prepend(`<i class="far fa-file-word"></i>`).addClass("no-style");
$('a[href$="xls"]:not(.no-tag)').prepend(`<i class="far fa-file-excel"></i>`).addClass("no-style");
$('a[href$="xlsx"]:not(.no-tag)').prepend(`<i class="far fa-file-excel"></i>`).addClass("no-style");
});

$( document ).ready(function() {
$( "table" ).addClass("table table-bordered table-hover");
$( "table" ).wrap( "<div class='table-responsive'></div>" );
});

// wrap iframes in responsive class //
$( document ).ready(function() {
  $( "iframe" ).wrap( "<div class='embed-responsive embed-responsive-16by9 mb-3'></div>" );
  $( "iframe#mapcanvas" ).unwrap().wrap( "<div class='embed-responsive embed-responsive-4by3 mb-3'></div>" )
});



// scrollspy //

// reorder the two layout sections  and start spying if page has a scrollspy class on it
if (document.querySelector('.scrollspy') !== null) {
$('body').scrollspy({ target: '#list' });
$( '#main-section' ).addClass('col-md-8').addClass('col-xs-12').addClass('order-1').removeClass('col-sm-12').removeClass('col-lg-8');
$( '#right-section' ).addClass('col-md-4').addClass('col-xs-12').addClass('order-md-1').removeClass('col-sm-12').removeClass('col-lg-4');
};

// back to top button

$(document).ready(function () {
// check if scrollspy is on page
if (document.querySelector('.scrollspy') !== null) {
  // when user scrolls
  $(window).scroll(function () {
    // fade in button when users scrolls below the contents
    if (($(this).scrollTop() > $('#contents').offset().top) && (!$('.to-top-anchor').visible())) {
      $('#back-to-top').show();
      $('#back-to-top').addClass('show');
      $("#back-to-top").removeAttr("style");

      // fade out button when button on page is visible
    } else if ($('.to-top-anchor').visible()) {
      $('#back-to-top').hide();
      $('#back-to-top').removeClass('show');

      // hide button when page button is not visible or above the contents section
    } else if (!($('.to-top-anchor').visible())) {
      $('#back-to-top').hide();
      $('#back-to-top').removeClass('show');
    }
  });
}
});

// accordion open and collapse all

if (document.querySelector('.openall') !== null) {
$('.openall').click(function () {
    $('.content-accordion .card .collapse').collapse('show');
});

$('.closeall').click(function () {
  $('.content-accordion .card .collapse').collapse('hide');
});
};

if (document.querySelector('.map-container') !== null) {
  $('#mapPopup').click(initMap);
  var buttonText = document.getElementById('mapPopup').innerHTML;
  $('#mapPopup').click(function () {
    if (buttonText === `Show map of school<i class="fa float-right mr-0 ml-auto pl-3"></i>`) {
      buttonText = `Hide map of school<i class="fa float-right mr-0 ml-auto pl-3"></i>`
      document.getElementById('mapPopup').innerHTML = buttonText;
    }
    else buttonText = `Show map of school<i class="fa float-right mr-0 ml-auto pl-3"></i>`;
    document.getElementById('mapPopup').innerHTML = buttonText;
  })
};