var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzvpwevswce_JJxuV6uhTkWGXf_9r1yzs9AGnqD6J_ykP8qyiDU/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
