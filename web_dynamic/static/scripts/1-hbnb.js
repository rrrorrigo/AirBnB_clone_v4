window.addEventListener('DOMContentLoaded', (e) => {
  alert("entrando al script...");
  $('input:checkbox').change(function() {
    alert($(this).attr('data-id'));
    alert($(this).attr('data-name'));
  });
});
