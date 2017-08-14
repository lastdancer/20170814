function initialize() {
  var myLatlng = new google.maps.LatLng(134.559225, 34.065687);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var georssLayer = new google.maps.KmlLayer({
    url: 'http://api.flickr.com/services/feeds/geo/?g=57577915@N00&format=feed-georss'
  });
  georssLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);