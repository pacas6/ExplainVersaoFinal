
/*
window.onload = async function (){

    showGeoExp();
}
*/
 let map;

async function showGeoExp(){

    map = new google.maps.Map(document.getElementById("map"), {
        // é aqui onde iremos manipular as configuraççoes do mapa
      center: { lat: 38.7909255, lng: -9.2064732 },
      // proximidadade padraão do mapa
      zoom: 13,
      // neste atributo podemos manipular o tipo de mapa que queremos utilizar para padrão
      mapTypeId: 'roadmap', // roadmap, terrain, satellite, hybrid
      // atributo styles serve para personalizacao dos mapas
      styles: 
      [
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#d6e2e6"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#cfd4d5"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#7492a8"
                  }
              ]
          },
          {
              "featureType": "administrative.neighborhood",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "lightness": 25
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#dde2e3"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#cfd4d5"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#dde2e3"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#7492a8"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#dde2e3"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#588ca4"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "saturation": -100
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#a9de83"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#bae6a1"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c6e8b3"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#bae6a1"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#41626b"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "saturation": -45
                  },
                  {
                      "lightness": 10
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c1d1d6"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#a6b5bb"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#9fb6bd"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "saturation": -70
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#b4cbd4"
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#588ca4"
                  }
              ]
          },
          {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#008cb5"
                  }
              ]
          },
          {
              "featureType": "transit.station.airport",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": -5
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#a6cbe3"
                  }
              ]
          }
      ],

      disableDefaultUI: false,
      streetViewControl: false,
      mapTypeControl: false,

    });

    const input = document.getElementById('location_input');
    const searchbox = new google.maps.places.SearchBox(input);
    const button = document.getElementById('button-location');

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(button);

    button.addEventListener('click', () => {

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition( 

                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    const marker = new google.maps.Marker({

                        position: pos,
                        map,
                    });

                    //infoWindow.setPosition(marker.getPosition);
                    //infoWindow.setContent('Your Current Location');
                    //infoWindow.open(map,marker);
                    //map.setCenter(pos);
                    //map.setZoom(12);

                    const infoWindow = new google.maps.InfoWindow({

                        position: marker.getPosition,
                        content: `Your current location`,
                    });
                    infoWindow.open(map,marker);
                    map.setCenter(pos);
                    map.setZoom(12);

                },

                () => {

                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {

            // se o browser nao suporta locazilcao
            handleLocationError(false, infoWindow, map.getCenter());
        }

    });

    try {
        
        let coordenadas = await $.ajax({

            url: '/api/geo/getExGeoData',
            method:'get',
            dataType: 'json',
    
        });

        const marker = new google.maps.Marker();

        for(let list of coordenadas.rows){

            const marker = new google.maps.Marker({

                position: { lat: list.geo_coords.x, lng: list.geo_coords.y},
                map,
                animation: google.maps.Animation.DROP,
                draggable: true,
            });

            const infoWindow = new google.maps.InfoWindow({

                position: marker.getPosition,
                content: `<h3>${list.endereço}</h4><p>${list.nome} ${list.apelido}</p>`,
            });

            infoWindow.open(map, marker);

            //infoWindow.setPosition(marker.getPosition);
            //infoWindow.setContent(`<h3>${list.endereço}</h4><p>${list.nome} ${list.apelido}</p>`);
            //infoWindow.open(map, marker);
        }

        sessionStorage.setItem('coords', coordenadas.geo_coords);

        console.log(coordenadas);

    } catch (error) {
        console.log(error)
    }
}
