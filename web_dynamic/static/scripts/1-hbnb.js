window.addEventListener('DOMContentLoaded', (e) => {
  $('input:checkbox').change(function() {
    alert($(this).attr('data-id'));
    alert($(this).attr('data-name'));
  });
});
