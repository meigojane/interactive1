$(document).ready(function(){

  $('body').keypress(function( event ) {
  
    
    // store key pressed
    var code = (event.keyCode ? event.keyCode : event.which);
    
    // detect if 'enter' is pressed
    if(code == 37) {
      $('#print').append('Turn left');
    }
    if(code == 39) {
      $('#print').append('Turn right');
    }
    if(code == 38) {
      $('#print').append('Go straight');
    }
    if(code == 40) {
      $('#print').append('Back out');
    }


    //

  });

});

(function() {
  var app = angular.module("BetterStreetViewApp", []);

  app.controller('SVImageController', ['$scope', function($scope) {

    var geocodeDelayTO = null;

    $scope.location = "37.76700429405994,-122.40011356447138";
    $scope.heading = 34;
    $scope.pitch = 10;
    $scope.fov = 90;
    $scope.src = "https://maps.googleapis.com/maps/api/streetview?size=500x300&location=&fov=90";
    $scope.imageVisible = false;

    $scope.clearAll = function() {
      $scope.location = "";
      $scope.heading = null;
      $scope.pitch = null;
      $scope.fov = 90;
      $scope.imageVisible = false;
    };

    $scope.hideImage = function() {
      $scope.imageVisible = false;
    };

    $scope.updateSrc = function() {
      var data = [
        "https://maps.googleapis.com/maps/api/streetview?size=500x300",
        "location=" + $scope.location
      ];

      if ($scope.heading) {
        data.push("heading=" + $scope.heading);
      }

      if ($scope.pitch) {
        data.push("pitch=" + $scope.pitch);
      }

      if ($scope.fov < 90) {
        data.push("fov=" + $scope.fov);
      }
      $scope.src = data.join("&");

      $scope.imageVisible = true;
    };

    $scope.refreshAllMaps = function() {
      $scope.updateSrc();

      var latLongReg = /^\-?\d*\.?\d+\,\-?\d*\.?\d+$/,
        newval = $scope.location;

      if (latLongReg.test(newval)) {
        var ll = newval.split(","),
          lat = parseFloat(ll[0]),
          lng = parseFloat(ll[1]);
        updateMap({
          lat: lat,
          lng: lng
        });
      } else {
        //geocoding time.
        if (geocodeDelayTO !== null) {
          window.clearTimeout(geocodeDelayTO);
          geocodeDelayTO = null;
        }

        if (newval) {
          geocodeDelayTO = window.setTimeout(function() {
            console.log("delayed...", newval);

            geocoder.geocode({
              address: newval
            }, function(results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                updateMap(results[0].geometry.location);
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          }, 1000);
        }
      }

    };

    // load google maps and Street view
    var fenway = {
      lat: 37.76700429405994,
      lng: -122.40011356447138
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      center: fenway,
      zoom: 14
    });
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 0
        }
      });
    map.setStreetView(panorama);
    var geocoder = new google.maps.Geocoder();

    // function to update map and panorama
    function updateMap(coords) {
      console.log("coordinates: ", coords);
      map.setCenter(coords);
      panorama.setPosition(coords);
    };

    // as panorama is moved around, update coordinates in location
    panorama.addListener("position_changed", function() {
      var pos = panorama.getPosition();
      var latLongString = [pos.lat(), pos.lng()].join(",");
      if (latLongString !== $scope.location) {
        $scope.$apply(function() {
          $scope.location = latLongString;
        });
      }

    });

    // as panorama pov changes, update heading and pitch
    panorama.addListener("pov_changed", function() {
      var pov = panorama.getPov();
      if (pov.heading !== $scope.heading || pov.pitch !== $scope.pitch) {
        $scope.$apply(function() {
          $scope.heading = pov.heading;
          $scope.pitch = pov.pitch;
        });
      }
    });

  }]);

})();