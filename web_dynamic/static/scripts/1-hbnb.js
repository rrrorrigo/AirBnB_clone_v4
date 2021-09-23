window.addEventListener('DOMContentLoaded', (e) => {
  /* let checked = [];
  $("input[name=ctrl_CustomerType]:checked").attr('xmlvalue'); */
  const id = []
  $('input[data-id]').each(ids => {
    id.append(ids.attr('data-id'));
    alert(ids);
  });
  $('input[data-id=:amenity_id] input:checkbox').change(function () {
    let checked = [];
    alert("entro")
    $('[data-id="' + id + '"] input:checkbox:checked').each(function () {
        checked.push($(this).attr('data-name'));
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
