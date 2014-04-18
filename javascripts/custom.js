// Contact Form

$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=8c7851cc798e21152db0fdb7bcdb7d74",
    data: $('#ajax-form').serialize()
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contact-form').find('form')[0].reset();
    $('#contact-form').replaceWith('<p style="color:green">Thank you for contacting us. We will get back to you as soon as possible.</p>')
  });
  return false; //to stop the form from submitting
});