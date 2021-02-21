$.ajax({
  url: "https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json",
  method: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(typeof(data));
    var html_to_append = '';
    $.each(data, function(i, item) {
      html_to_append +=
      '<div class="col-3 mb-3"><div class="text-uppercase"><p>' +
      item.Name +
      '<div class="col-3 mb-3"><div class="ext-uppercase"><p>' +
      item.Price +
      '</p></div><img  class="image img-fluid" src="' +
      item.photo +
      '" /><p class="company">' +
      item.Retailer +
      '</p></div>';
    });
    $("#items-container").html(html_to_append);
  },
  error: function() {
    console.log(data);
  }
});
