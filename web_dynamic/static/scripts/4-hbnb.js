window.addEventListener('DOMContentLoaded', (e) => {
    let names = [];
    let ids = [];
    $('input:checkbox').change(function() {
      if ($(this).is(":checked")) {
        const name = ($(this).attr('data-name'));
        names.push(name);
        const id = ($(this).attr('data-id'));
        ids.push(id);
      } else {
        const name = ($(this).attr('data-name'));
        const i = names.indexOf(name);
        names.splice(i, 1);
        const id = ($(this).attr('data-id'));
        const j = ids.indexOf(id);
        ids.splice(j, 1);
      }
      $('.amenities > h4').text(names.join(', '));
    });
    $.get('http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/status/', function (data, status) {
      if (status) {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
    $.ajax ({
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
    $("button").click(function () {
      let amenities_ids = {"amenities": ids};
      $.ajax ({
        type: "POST",
        url: 'http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/places_search/',
        dataType: 'json',
        async: false,
        data: JSON.stringify(amenities_ids),
        contentType : 'application/json',
        success: function (data) {
          $('article').remove();
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
});
