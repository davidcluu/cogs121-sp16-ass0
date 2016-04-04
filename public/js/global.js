// Global variables
var submitButton;


// jQuery ready ()
$(function(){
  $submitButton = $('#submitButton');

  $('#emailInput').focusout(checkEmailInput);
  $('#messageInput').focusout(checkMessageInput);
});


function checkEmailInput (e) {
  var $this = $(this);

  if ($this.val().indexOf('@') >= 0) {
    $this.parent().removeClass('error');
    $submitButton.prop('disabled',false);
    $this.css({
      'border-color': '#0f0'
    });
  }
  else {
    $this.parent().addClass('error');
    $submitButton.prop('disabled',true);
    $this.css({
      'border-color': '#f00'
    });
  }
}


function checkMessageInput (e) {
  var $this = $(this);

  if ($this.val().length > 0) {
    $this.parent().removeClass('error');
    $submitButton.prop('disabled',false);
    $this.css({
      'border-color': '#0f0'
    });
  }
  else {
    $this.parent().addClass('error');
    $submitButton.prop('disabled',true);
    $this.css({
      'border-color': '#f00'
    });
  }
}
