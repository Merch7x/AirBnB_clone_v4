$(function () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:5001/api/v1/status/',
    success: function (response) {
      let status = response["status"];
      if (status === "OK")
        $('DIV#api_status').addClass('available');
    }
  });
});
