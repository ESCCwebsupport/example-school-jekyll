$(document).ready(function() {
    $('.header').height($(window).height());
  });
  
  const myForm = document.getElementById('contactForm');
  function resetForm() {
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
  