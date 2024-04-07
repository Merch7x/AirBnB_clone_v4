$(function() {
    $("button").click(function() {
        let checkedAmenites = [];
        $("input[type=checkbox]:checked").each(function() {
            checkedAmenites.push($(this).attr('data-name'));
        });
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: checkedAmenites }),
            success: function(data) {
                // a new POST request to places_search should be made with the list of Amenities checked
                console.log(data);
            }
        });
    });
});
