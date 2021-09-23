window.addEventListener('DOMContentLoaded', (e) => {
  let list = [];
  $('input:checkbox').change(function() {
    if ($(this).is(":checked")) {
      const name = ($(this).attr('data-name'));
      list.push(name);
    } else {
      const name = ($(this).attr('data-name'));
      const i = list.indexOf(name);
      list.splice(i, 1);
    }
    $('.amenities > h4').text(list.join(', '));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status) {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
