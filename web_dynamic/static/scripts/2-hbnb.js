$(function () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:5001/api/v1/status/',
    success: function (response) {
      const status = response.status;
      if (status === 'OK') { $('DIV#api_status').addClass('available'); } else { $('DIV#api_status').removeClass('available'); }
    }
  });
});
