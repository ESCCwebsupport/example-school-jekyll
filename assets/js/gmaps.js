    var map;

    const schoolLocation = { lat: {{ site.latitude }}, lng: {{ site.longitude }}};

  function initMap() {
    

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: schoolLocation,
    });

    let request = {
        placeId: '{{ site.placeID }}',
        fields: ["name", "formatted_address", "place_id", "geometry"],
    };
    
    const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
            place.name +
            "</strong><br>" +
            "<br>" +
            place.formatted_address +
            "</div>"
        );
        infowindow.open(map, this);
      });
    }
  });
}