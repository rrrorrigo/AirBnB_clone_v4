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
  const request = require('request');
  request('http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/status/', function (error, response, body) {
    try {
      const json = JSON.parse(body);
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      }
    } catch {
      $('div#api_status').removeClass('available');
    };
  });
});
