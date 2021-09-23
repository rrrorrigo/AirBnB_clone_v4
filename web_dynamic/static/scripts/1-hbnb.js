window.addEventListener('DOMContentLoaded', (e) => {
  let list = {};
  $('input:checkbox').change(function() {
    if ($(this).is(":checked")) {
      const name = ($(this).attr('data-name'));
      list.name = name;
    } else {
      const name = ($(this).attr('data-name'));
      list.pop(name);
    }
    $('.amenities > h4').text(list.join(', '))
  });
});
