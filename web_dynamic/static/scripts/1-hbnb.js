window.addEventListener('DOMContentLoaded', (e) => {
  alert("entrando al script...");
  $('.popover').on('change', function() {
    alert(this.attr('data-id'));
    alert(this.attr('data-name'));
  });
});
