$(document).ready(function () {
  $('.popover').focus(function () {
    let checked = [];
    $.each($('input[data-id=":amenity_id"]:checked'), function () {
      checked.push($(this).val());
      $('.amenities > h4').text(checked.join(', '));
    });
  });
});
