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
  $.ajax
    ({
      type: "POST",
      url: 'http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/places_search/',
      dataType: 'json',
      async: false,
      data: JSON.stringify({}),
      contentType : 'application/json',
      success: function (data) {
        data.forEach(element => {
          const article = `<article>
          <div class="title_box">
          <h2>${element.name}</h2>
          <div class="price_by_night">${element.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${element.max_guest}</div>
                <div class="number_rooms">${element.number_rooms}</div>
                <div class="number_bathrooms">${element.number_bathrooms}</div>
        </div>
        <div class="description">
        ${element.description}
        </div>
      </article>`;
          $('.places').append(article);
        });
      }
    });
});
