// jQuery ready ()
$(function(){
  $submitButton = $('#submitButton');
  $emailInput = $('#emailInput');
  $messageInput = $('#messageInput')

  $emailInput.focusout(checkEmailInput);
  $messageInput.focusout(checkMessageInput);
  $submitButton.click(checkFormContents);
});


function testEmailInput () {
  return ($emailInput.val().indexOf('@') >= 0);
}


function testMessageInput () {
  return ($messageInput.val().length > 0);
}


function checkEmailInput () {
  if ( testEmailInput() ) {
    $emailInput.parent().removeClass('error');
    if ( testMessageInput() ) {
      $submitButton.prop('disabled',false);
    }
    $emailInput.css({
      'border-color': '#0f0'
    });
    return false;
  }
  else {
    $emailInput.parent().addClass('error');
    $submitButton.prop('disabled',true);
    $emailInput.css({
      'border-color': '#f00'
    });
    return true;
  }
}


function checkMessageInput () {
  if ( testMessageInput() ) {
    $messageInput.parent().removeClass('error');
    if ( testEmailInput() ) {
      $submitButton.prop('disabled',false);
    }
    $messageInput.css({
      'border-color': '#0f0'
    });
    return false;
  }
  else {
    $messageInput.parent().addClass('error');
    $submitButton.prop('disabled',true);
    $messageInput.css({
      'border-color': '#f00'
    });
    return true;
  }
}


var flag = false;
function checkFormContents (e) {
  if (flag) {
    flag = false;
    return;
  }

  e.preventDefault();

  if (checkEmailInput() || checkMessageInput()) {
    console.log("a");
    return;
  }
  else {
    console.log("b");
    flag = true;
    $(this).trigger('click');
  }
}
