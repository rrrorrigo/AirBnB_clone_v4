window.addEventListener('DOMContentLoaded', (e) => {
  let checked = [];
  alert("8==D importado bien");
  $.each($('input[data-id=":amenity_id"]:checked'), function () {
    checked.push($(this).val());
    alert(checked);
    $('.amenities > h4').text(checked.join(', '))
  });
});
