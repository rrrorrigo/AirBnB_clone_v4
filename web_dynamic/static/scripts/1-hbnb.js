$(document).ready(function () {
  let checked = [];
  $.each($('input[data-id=":amenity_id"]:checked'), function () {
    checked.push($(this).val());
    alert(checked);
    $('.amenities > h4').text(checked.join(', '))
  });
});
