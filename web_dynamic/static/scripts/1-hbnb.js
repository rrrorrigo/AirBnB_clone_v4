window.addEventListener('DOMContentLoaded', (e) => {
  $('input:checkbox').on('change', function() {
    alert(this.attr('data-id'));
    alert(this.attr('data-name'));
  });
});
