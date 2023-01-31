// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;

function initMap() {
    const Monaco = new google.maps.LatLng(43.73834617015299, 7.419415048154721);

    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
    center: Monaco,
    zoom: 15,
    }); const script = document.createElement("script");

    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    let request = [{
    query: "11 avenue du general leclerc roquebrune cap martin",
    fields: ["name", "geometry"],
    },{
        query: "Fnac Monaco",
        fields: ["name", "geometry"]
    }];
  


       for (let i = 0; i < request.length; i++) {
        const element = request[i];
        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(element, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
        eqfeed_callback(results.length,results[i].geometry.location.lat(), results[i].geometry.location.lng());
  
        map.setCenter(results[0].geometry.location);
            }
            }
        });
    }
}
//function createMarker(place) {

  //  if (!place.geometry || !place.geometry.location) return;

    //const marker = new google.maps.Marker({
    //map,
    //position: place.geometry.location,
    //});
  
    //google.maps.event.addListener(marker, "click", () => {
    //infowindow.setContent(place.name || "");
    //infowindow.open(map);
    //});

   
 //}
 function eqfeed_callback  (result,lat, long) {
    //for (let i = 0; i < results.features.length; i++) {
      //const coords = results.features[i].geometry.coordinates;
    console.log(result)
      let test = [{
          lat : 43.7398974790225,
          long:  7.415552749133049
      },{
          lat :43.77690960290454,
          long:  7.495396139407746
      }]
  
      for (let i = 0; i < result; i++) {
   
           //  if (!place.geometry || !place.geometry.location) return;

    //const marker = new google.maps.Marker({
    //map,
    //position: place.geometry.location,
    //});
  
    //google.maps.event.addListener(marker, "click", () => {
    //infowindow.setContent(place.name || "");
    //infowindow.open(map);
    //});
    console.log(lat);
          const latLng = new google.maps.LatLng(lat , long);
  
      new google.maps.Marker({
        position: latLng,
        map: map,
      });
      }
    //}
  };

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;