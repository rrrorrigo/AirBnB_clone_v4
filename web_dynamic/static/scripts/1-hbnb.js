window.addEventListener('DOMContentLoaded', (e  ) => {
  /* let checked = []; */
  $('[data-id=":amenity_id"] input:checkbox').change(function () {
    let checked = [];
    alert("entro")
    $('[data-id=":amenity_id"] input:checkbox:checked').each(function () {
        checked.push($(this).attr('amenity_name'));
        alert("identifico el click");
    });
    $('.amenities > h4').text(checked.join(', '));
  });
  /* $.each($('input[data-id=":amenity_id"]:checked'), function () {
    checked.push($(this).val());
    alert(checked);
    $('.amenities > h4').text(checked.join(', '))
  }); */
});
