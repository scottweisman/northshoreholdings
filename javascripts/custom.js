// Contact Form

$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=ba95c5d3f45778e730af682a1d883fbf",
    data: $('#ajax-form').serialize()
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contact-form').find('form')[0].reset();
    $('#contact-form').replaceWith('<p style="color:green">Thank you for contacting us. We will get back to you as soon as possible.</p>');
  });
  return false; //to stop the form from submitting
});

// Quotes

// $(function() {
//   var quotes = $(".quotes");
//   var quoteIndex = -1;

//   function showNextQuote() {
//     ++quoteIndex;
//     quotes.eq(quoteIndex % quotes.length)
//       .fadeIn(3000)
//       .delay(3000)
//       .fadeOut(3000, showNextQuote);
//   }

//   showNextQuote();

// });