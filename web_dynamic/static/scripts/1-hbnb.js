$(function () {
  $('.checkbox').on('change', function () {
    const checkboxStatusList = [];
    $('input[type="checkbox"]').each(function () {
      let checkboxId = $(this).attr('amenity_id');
      let isChecked = $(this).is(':checked');
      checkboxStatusList.push({ id: checkboxId, checked: isChecked });
    });

    $('input[type="checkbox"]').on('change', function () {
      let checkboxId = $(this).attr('amenity_id');
      let isChecked = $(this).is(':checked');

      for (let i = 0; i < checkboxStatusList.length; i++) {
        if (checkboxStatusList[i].id === checkboxId) {
          checkboxStatusList[i].checked = isChecked;
          break;
        }
      }

      console.log("CHeckbox status list:", checkboxStatusList);

    })
  })
});