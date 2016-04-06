myPortfolio.controller('HomepageCtrl', function($scope) {
  
  var greatDestinations = [
    {latlong: [-6.775427, 147.026969], zoom: 12},
    {latlong: [38.376745, -5.724335], zoom: 12},
    {latlong: [-7.478737, 144.606815], zoom: 12},
    {latlong: [-22.359571, 149.864209], zoom: 12},
    {latlong: [-28.949772, 136.542367], zoom: 10},
    {latlong: [-0.763880, 30.572127], zoom: 10},
    {latlong: [-2.406475, 30.201758], zoom: 10},
    {latlong: [37.357673, -101.197748], zoom: 13},
    {latlong: [38.447606, -101.351214], zoom: 12},
    {latlong: [37.683051, -106.069069], zoom: 14},
    {latlong: [25.036203, -76.543312], zoom: 12},
  ];

  var homeLocation = _.sample(greatDestinations);

  var map = L.mapbox.map('map', 'jlonganecker.kmni8hpl', {
    accessToken: 'pk.eyJ1IjoiamxvbmdhbmVja2VyIiwiYSI6IjdCamNwQVUifQ.-yYZkafAltQ3FgAtTyiW-Q',
    attributionControl: false,
    infoControl: false,
    zoomControl: false
  })
  .setView(homeLocation.latlong, homeLocation.zoom);
  //*/

  // from https://www.mapbox.com/mapbox.js/example/v1.0.0/disable-zooming-panning/
  // Disable drag and zoom handlers.
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();

  // Disable tap handler, if present.
  if (map.tap) map.tap.disable();

});
