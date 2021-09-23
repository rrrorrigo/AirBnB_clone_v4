window.addEventListener('DOMContentLoaded', (e) => {
  let list = [];
  $('input:checkbox').change(function() {
    const name = ($(this).attr('data-name'));
    list.push(name);  
    $('.amenities > h4').text(list.join(', '))
  });
});
