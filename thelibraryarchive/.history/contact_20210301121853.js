(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL) {var contact = {

    init:function(){


        //load canvas script and init
        var myScript = document.createElement("script");
        myScript.setAttribute("src", 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBgcL9WlQurkB-kRTgVhM62dKP7c8p1Hl4&callback=app.contact.initMap');
        myScript.setAttribute("id", 'map');

        if( jQuery('script#map').length == 0){
            document.body.appendChild(myScript);
        }


        //blasting headinga
        jQuery("h1,h2").blast({
            delimiter: "character",
            tag: "span"
        });


        var sectionContact = jQuery('.js-page-contact');

        var a = 0;

        sectionContact.find("h2 .blast").each(function(){

            var el = jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });


        setTimeout(function(){

            sectionContact.find(".blast").removeClass('animated bounceIn');
            sectionContact.find(".blast").css('opacity',1);

            sectionContact.find(".blast").mouseenter(function (){

                var el = jQuery(this);

                jQuery(this).addClass('animated rubberBand');
                jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);

        var  b = 300;
        sectionContact.find(".contact-form li").each(function(){

            var el = jQuery(this);

            setTimeout(function(){

                el.addClass('animated fadeInUp');


            },b);

            b =b + 100;

        });


        app.contactForm = require('./contact-form.js');

        app.contactForm.init();

        if (typeof google === 'object' && typeof google.maps === 'object') {
            contact.initMap();
        }

        setTimeout(function(){
            alertify.message('Have any questions? Drop me a line... ');
        },3000);


    },
    destroy:function(){

        app.contactForm.destroy();


    },
    initMap: function () {

        var mapOptions = {
            center: new google.maps.LatLng(53.37493165169552,14.66331481933594),
            zoom:6,
            disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);


        var styles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#012621"
                    },
                    {
                        "weight": 0.8
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#0c0000"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": -7
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": 0.3
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#047968"
                    },
                    {
                        "lightness": "-7"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": -15
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": "7"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": -34
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1D1D1D"
                    }
                ]
            }
        ];



        map.setOptions({styles: styles});

        var image = path + 'img/marker.png';
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(53.37493165169552,14.66331481933594),
            animation: google.maps.Animation.DROP,
            icon: image

        });

        marker.setMap(map);

        google.maps.event.addListenerOnce(map, 'tilesloaded', function(){


            jQuery('.inf-map').addClass('show');
            jQuery('#map').css('opacity',1);

        });

    }

}
module.exports = contact;
}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);







[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2b3638"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2b3638"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#24282b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#24282b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]



