$('.add-more-btn').click(function(e) {
	e.preventDefault();
  $('#task').clone().appendTo('.cloned');
});
