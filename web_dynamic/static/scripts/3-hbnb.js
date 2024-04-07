$(function () {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (response) {
      response.forEach(function (place) {
        $('SECTION.places').append('<article></article>');
        $('SECTION.places article:last-child').append('<div class="title_box"></div>');
        $('SECTION.places article:last-child div.title_box').append('<h2>' + place.name + '</h2>');
        $('SECTION.places article:last-child div.title_box').append('<div class="price_by_night">$' + place.price_by_night + '</div>');
        $('SECTION.places article:last-child').append('<div class="information"></div>');
        $('SECTION.places article:last-child div.information').append('<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest > 1 ? 's' : '') + '</div>');
        $('SECTION.places article.last-child div.information').append('<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms > 1 ? 's' : '') + '</div>');
        $('SECTION.places article.last-child div.information').append('<div class="number_bathrooms"> ' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms > 1 ? 's' : '') + '</div>');
        $('SECTION.places article:last-child').append('<div class="description">' + place.description + '</div>');
      });
    }
  });
});
