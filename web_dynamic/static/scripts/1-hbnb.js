$(function () {
  // Cache the selection of checkboxes
  const $checkboxes = $('input[type="checkbox"]');

  // Event handler for checkbox changes
  $checkboxes.on('change', function () {
    // Update checkbox status list
    const checkboxStatusList = [];
    $checkboxes.each(function () {
      const checkboxId = $(this).attr('data-id');
      const checkboxName = $(this).attr('data-name');
      const isChecked = $(this).is(':checked');
      checkboxStatusList.push({ id: checkboxId, name: checkboxName, checked: isChecked });
    });

    const checkedAmenities = checkboxStatusList.filter(
      item => item.checked).map(item => item.name);
    $('.amenities h4').text(checkedAmenities.join(', '));
  });
});
