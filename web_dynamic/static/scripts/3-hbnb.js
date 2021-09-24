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
    $('.amenities > h4').append(list.join(', '));
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
      //the url where you want to sent the userName and password to
      url: 'http://d701e46f5948.d79346c3.hbtn-cod.io:5001/api/v1/places_search/',
      dataType: 'json',
      async: false,
      //json object to sent to the authentication url
      data: JSON.stringify({}),
      contentType : 'application/json',
      success: function (data) {
        data.forEach(element => {
          const article = `<article>
          <div class="title_box">
          <h2></h2>
          <div class="price_by_night"></div>
        </div>
        <div class="information">
          <div class="max_guest"></div>
                <div class="number_rooms"></div>
                <div class="number_bathrooms"></div>
        </div>
      </article>`;
          $('.places').append(article);
          $('.title_box').append(element.name);
          $('.price_by_night').append(element.price_by_night);
          $('.information').append(element.description);
          $('.max_guest').append(element.max_guest);
          $('.number_rooms').append(element.number_rooms);
          $('.number_bathrooms').append(element.number_bathrooms);
        });
      }
    });
});/* 
"__class__": "Place",
    "city_id": "f059e78d-c359-4215-9e73-96309618d4d0",
    "created_at": "2021-09-23T22:36:38.000000",
    "description": null,
    "id": "459d5755-4d15-4095-8eda-7f731aa6c906",
    "latitude": null,
    "longitude": null,
    "max_guest": 0,
    "name": "KIKOHIJODEPUTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "number_bathrooms": 0,
    "number_rooms": 0,
    "price_by_night": 0,
    "updated_at": "2021-09-23T22:36:38.000000",
    "user_id": "fc494781-4eba-49ef-96f8-9fd8305bc0f4" */
