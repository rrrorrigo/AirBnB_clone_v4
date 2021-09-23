window.addEventListener('DOMContentLoaded', (e) => {
  let list = [];
  $('input:checkbox').change(function() {
    const name = ($(this).attr('data-name'));
    list.push(name);
    alert(list);  
    $('.amenities > h4').text(list)
  });
});
