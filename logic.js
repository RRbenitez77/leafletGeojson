<<<<<<< HEAD
// Create a map object
=======


>>>>>>> 43734d6 (maping)
// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson"

var query2 = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson"

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
<<<<<<< HEAD
=======
  console.log(data.features);
>>>>>>> 43734d6 (maping)
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {


  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
      "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p>");
  }

  

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      var color;
      var r = 255;
      var g = Math.floor(255-80*feature.properties.mag);
      var b = Math.floor(255-80*feature.properties.mag);
<<<<<<< HEAD
      color= "rgb("+r+" ,"+g+","+ b+")"
=======
      color= getColor(feature.properties.mag)
>>>>>>> 43734d6 (maping)
      
      var geojsonMarkerOptions = {
        radius: 4*feature.properties.mag,
        fillColor: color,
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
  });


<<<<<<< HEAD
=======


>>>>>>> 43734d6 (maping)
  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
  
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
<<<<<<< HEAD
    "access_token=pk.eyJ1IjoicnJiZW5pdGV6MTk3NyIsImEiOiJja3F2aXl1azQwZXloMm9tdGM2bHFrbW1iIn0.N34bIy5l_gsbQmZML586eA." +
    "T6YbdDixkOBWH_k9GbS8JQ");
=======
    "access_token=pk.eyJ1IjoicGF5bW9uMTIzIiwiYSI6ImNrc3J6NmRtMzByajMydm81bHM1eWQ4NGoifQ.BxJIPVjwfFunxFuvOlq-EQ");
>>>>>>> 43734d6 (maping)

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, earthquakes]
  });


<<<<<<< HEAD
  function getColor(d) {
      return d < 1 ? 'rgb(255,255,255)' :
            d < 2  ? 'rgb(255,225,225)' :
            d < 3  ? 'rgb(255,195,195)' :
            d < 4  ? 'rgb(255,165,165)' :
            d < 5  ? 'rgb(255,135,135)' :
            d < 6  ? 'rgb(255,105,105)' :
            d < 7  ? 'rgb(255,75,75)' :
            d < 8  ? 'rgb(255,45,45)' :
            d < 9  ? 'rgb(255,15,15)' :
                        'rgb(255,0,0)';
  }
=======

>>>>>>> 43734d6 (maping)

  // Create a legend to display information about our map
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {
  
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 1, 2, 3, 4, 5, 6, 7, 8],
      labels = [];

      div.innerHTML+='Magnitude<br><hr>'
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(grades[i] + 1) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  
  return div;
  };
  
  legend.addTo(myMap);

}
<<<<<<< HEAD
=======

function getColor(d) {
  return d < 1 ? 'rgb(255,255,255)' :
        d < 2  ? 'rgb(255,225,225)' :
        d < 3  ? 'rgb(255,195,195)' :
        d < 4  ? 'rgb(255,165,165)' :
        d < 5  ? 'rgb(255,135,135)' :
        d < 6  ? 'rgb(255,105,105)' :
        d < 7  ? 'rgb(255,75,75)' :
        d < 8  ? 'rgb(255,45,45)' :
        d < 9  ? 'rgb(255,15,15)' :
                    'rgb(255,0,0)';
}
>>>>>>> 43734d6 (maping)
