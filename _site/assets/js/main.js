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
  
  function is_youtubelink(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
}
function is_imagelink(url) {
    var p = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    return (url.match(p)) ? true : false;
}
function is_vimeolink(url,el) {
    var id = false;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                var response = JSON.parse(xmlhttp.responseText);
                id = response.video_id;
                console.log(id);
                el.classList.add('lightbox-vimeo');
                el.setAttribute('data-id',id);

                el.addEventListener("click", function(event) {
                    event.preventDefault();
                    document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://player.vimeo.com/video/'+el.getAttribute('data-id')+'/?autoplay=1&byline=0&title=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
                    document.getElementById('lightbox').style.display = 'block';

                    setGallery(this);
                });
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    xmlhttp.open("GET", 'https://vimeo.com/api/oembed.json?url='+url, true);
    xmlhttp.send();
}
function setGallery(el) {
    var elements = document.body.querySelectorAll(".gallery");
    elements.forEach(element => {
        element.classList.remove('gallery');
	});
	if(el.closest('ul, p')) {
		var link_elements = el.closest('ul, p').querySelectorAll("a[class*='lightbox-']");
		link_elements.forEach(link_element => {
			link_element.classList.remove('current');
		});
		link_elements.forEach(link_element => {
			if(el.getAttribute('href') == link_element.getAttribute('href')) {
				link_element.classList.add('current');
			}
		});
		if(link_elements.length>1) {
			document.getElementById('lightbox').classList.add('gallery');
			link_elements.forEach(link_element => {
				link_element.classList.add('gallery');
			});
		}
		var currentkey;
		var gallery_elements = document.querySelectorAll('a.gallery');
		Object.keys(gallery_elements).forEach(function (k) {
			if(gallery_elements[k].classList.contains('current')) currentkey = k;
		});
		if(currentkey==(gallery_elements.length-1)) var nextkey = 0;
		else var nextkey = parseInt(currentkey)+1;
		if(currentkey==0) var prevkey = parseInt(gallery_elements.length-1);
		else var prevkey = parseInt(currentkey)-1;
		document.getElementById('next').addEventListener("click", function() {
			gallery_elements[nextkey].click();
		});
		document.getElementById('prev').addEventListener("click", function() {
			gallery_elements[prevkey].click();
		});
	}
}

document.addEventListener("DOMContentLoaded", function() {

    //create lightbox div in the footer
    var newdiv = document.createElement("div");
    newdiv.setAttribute('id',"lightbox");
    document.body.appendChild(newdiv);

    //add classes to links to be able to initiate lightboxes
    var elements = document.querySelectorAll('a');
    elements.forEach(element => {
        var url = element.getAttribute('href');
        if(url) {
            if(url.indexOf('vimeo') !== -1 && !element.classList.contains('no-lightbox')) {
                is_vimeolink(url,element);
            }
            if(is_youtubelink(url) && !element.classList.contains('no-lightbox')) {
                element.classList.add('lightbox-youtube');
                element.setAttribute('data-id',is_youtubelink(url));
            }
            if(is_imagelink(url) && !element.classList.contains('no-lightbox')) {
                element.classList.add('lightbox-image');
                var href = element.getAttribute('href');
                var filename = href.split('/').pop();
                var split = filename.split(".");
                var name = split[0];
                element.setAttribute('title',name);
            }
        }
    });

    //remove the clicked lightbox
    document.getElementById('lightbox').addEventListener("click", function(event) {
        if(event.target.id != 'next' && event.target.id != 'prev'){
            this.innerHTML = '';
            document.getElementById('lightbox').style.display = 'none';
        }
    });
    
    //add the youtube lightbox on click
    var elements = document.querySelectorAll('a.lightbox-youtube');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://www.youtube.com/embed/'+this.getAttribute('data-id')+'?autoplay=1&showinfo=0&rel=0"></iframe></div>';
            document.getElementById('lightbox').style.display = 'block';

            setGallery(this);
        });
    });

    //add the image lightbox on click
    var elements = document.querySelectorAll('a.lightbox-image');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="img" style="background: url(\''+this.getAttribute('href')+'\') center center / contain no-repeat;" title="'+this.getAttribute('title')+'" ><img src="'+this.getAttribute('href')+'" alt="'+this.getAttribute('title')+'" /></div><span>'+this.getAttribute('title')+'</span>';
            document.getElementById('lightbox').style.display = 'block';

            setGallery(this);
        });
    });

});


$( document ).ready(function() {
  $('a[href$="pdf"]').prepend(`<i class="far fa-file-pdf"></i>`).addClass("no-style");
  $('a[href$="doc"]').prepend(`<i class="far fa-file-word"></i>`).addClass("no-style");
  $('a[href$="docx"]').prepend(`<i class="far fa-file-word"></i>`).addClass("no-style");
  $('a[href$="xls"]').prepend(`<i class="far fa-file-excel"></i>`).addClass("no-style");
  $('a[href$="xlsx"]').prepend(`<i class="far fa-file-excel"></i>`).addClass("no-style");
});

$( document ).ready(function() {
  $( "table" ).addClass("table table-bordered table-hover");
  $( "table" ).wrap( "<div class='table-responsive'></div>" );
});

// scrollspy //

// reorder the two layout sections  and start spying if page has a scrollspy class on it
if (document.querySelector('.scrollspy') !== null) {
  $('body').scrollspy({ target: '#list' });
  $( '#main-section' ).addClass('col-sm-8').addClass('col-xs-12').addClass('order-1').removeClass('col-sm-12').removeClass('col-lg-8');
  $( '#right-section' ).addClass('col-sm-4').addClass('col-xs-12').addClass('order-sm-1').removeClass('col-sm-12').removeClass('col-lg-4');
  if (window.matchMedia('screen and (max-width: 575.98px)').matches) {
    $( '#right-section' ).addClass('scroll-container');
}};

// on resize of window, add padding the size of scrollspy list to mobile screens, or remove styling if sizing up to laptop screen
$(window).on('resize', function () {
  if (window.matchMedia('screen and (max-width: 575.98px)').matches) {
    if (document.querySelector('.scrollspy') !== null) {
      var height = $("#list").height() + 8;
      $('h4').addClass('scroll-header');
      $('.scroll-header').css('padding-top', height).css('margin-top', -8 - height);
      $( '#right-section' ).addClass('scroll-container');
    }
  }
  else {
    if (document.querySelector('.scrollspy') !== null) {
      var height = 0;
      if (document.querySelector('.masthead')) {
        $( '#right-section' ).removeClass('scroll-container');
        $('.scroll-header').css('padding-top', 0).css('margin-top', 0);
      } else {
      $('h4').removeClass('scroll-header');
      $("[style]").removeAttr("style");
      $( '#right-section' ).removeClass('scroll-container');
    }};
  }
});

// if mobile screen size, add padding styling as above
if (window.matchMedia('screen and (max-width: 575.98px)').matches) {
  if (document.querySelector('.scrollspy') !== null) {
      var height = $("#list").height() + 8;
      $('h4').addClass('scroll-header');
      $('.scroll-header').css('padding-top', height).css('margin-top', -8 - height);
    };
};

// accordion open and collapse all

if (document.querySelector('.openall') !== null) {
  $('.openall').click(function () {
      $('.card .collapse').collapse('show');
  });

$('.closeall').click(function () {
    $('.card .collapse').collapse('hide');
});
}