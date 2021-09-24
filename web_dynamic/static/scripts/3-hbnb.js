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
  $.get('http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/status/', function (data, status) {
    if (status) {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  /* $.ajax
    ({
      type: "POST",
      //the url where you want to sent the userName and password to
      url: 'http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/places_search/',
      dataType: 'json',
      async: false,
      //json object to sent to the authentication url
      data: '{}',
      success: function () {
        alert("Thanks!"); 
      }
    }); */
  $.post('http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/places_search/', {}, function (data) {
    alert(data);
  }, json);
});
