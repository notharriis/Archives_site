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











CustomMarker.prototype = new google.maps.OverlayView();

function CustomMarker(opts) {
    this.setValues(opts);
}

CustomMarker.prototype.draw = function() {
    var self = this;
    var div = this.div;
    if (!div) {
        div = this.div = $('' +
            '<div>' +
            '<div class="shadow"></div>' +
            '<div class="pulse"></div>' +
            '<div class="pin-wrap">' +
            '<div class="pin"></div>' +
            '</div>' +
            '</div>' +
            '')[0];
        this.pinWrap = this.div.getElementsByClassName('pin-wrap');
        this.pin = this.div.getElementsByClassName('pin');
        this.pinShadow = this.div.getElementsByClassName('shadow');
        div.style.position = 'absolute';
        div.style.cursor = 'pointer';
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
        google.maps.event.addDomListener(div, "click", function(event) {
            google.maps.event.trigger(self, "click", event);
        });
    }
    var point = this.getProjection().fromLatLngToDivPixel(this.position);
    if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
    }
};

CustomMarker.prototype.animateDrop = function() {
    dynamics.stop(this.pinWrap);
    dynamics.css(this.pinWrap, {
        'transform': 'scaleY(2) translateY(-'+$('#map').outerHeight()+'px)',
        'opacity': '1',
    });
    dynamics.animate(this.pinWrap, {
        translateY: 0,
        scaleY: 1.0,
    }, {
        type: dynamics.gravity,
        duration: 1800,
    });

    dynamics.stop(this.pin);
    dynamics.css(this.pin, {
        'transform': 'none',
    });
    dynamics.animate(this.pin, {
        scaleY: 0.8
    }, {
        type: dynamics.bounce,
        duration: 1800,
        bounciness: 600,
    })

    dynamics.stop(this.pinShadow);
    dynamics.css(this.pinShadow, {
        'transform': 'scale(0,0)',
    });
    dynamics.animate(this.pinShadow, {
        scale: 1,
    }, {
        type: dynamics.gravity,
        duration: 1800,
    });
}

CustomMarker.prototype.animateBounce = function() {
    dynamics.stop(this.pinWrap);
    dynamics.css(this.pinWrap, {
        'transform': 'none',
    });
    dynamics.animate(this.pinWrap, {
        translateY: -30
    }, {
        type: dynamics.forceWithGravity,
        bounciness: 0,
        duration: 500,
        delay: 150,
    });

    dynamics.stop(this.pin);
    dynamics.css(this.pin, {
        'transform': 'none',
    });
    dynamics.animate(this.pin, {
        scaleY: 0.8
    }, {
        type: dynamics.bounce,
        duration: 800,
        bounciness: 0,
    });
    dynamics.animate(this.pin, {
        scaleY: 0.8
    }, {
        type: dynamics.bounce,
        duration: 800,
        bounciness: 600,
        delay: 650,
    });

    dynamics.stop(this.pinShadow);
    dynamics.css(this.pinShadow, {
        'transform': 'none',
    });
    dynamics.animate(this.pinShadow, {
        scale: 0.6,
    }, {
        type: dynamics.forceWithGravity,
        bounciness: 0,
        duration: 500,
        delay: 150,
    });
}

CustomMarker.prototype.animateWobble = function() {
    dynamics.stop(this.pinWrap);
    dynamics.css(this.pinWrap, {
        'transform': 'none',
    });
    dynamics.animate(this.pinWrap, {
        rotateZ: -45,
    }, {
        type: dynamics.bounce,
        duration: 1800,
    });

    dynamics.stop(this.pin);
    dynamics.css(this.pin, {
        'transform': 'none',
    });
    dynamics.animate(this.pin, {
        scaleX: 0.8
    }, {
        type: dynamics.bounce,
        duration: 800,
        bounciness: 1800,
    });
}

$(function() {
    var pos = new google.maps.LatLng(42.9837, -81.2497);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: pos,
        disableDefaultUI: true,
    });

    var marker = new CustomMarker({
        position: pos,
        map: map,
    });

    google.maps.event.addListener(marker, 'click', function(e) {
        marker.animateWobble();
    });

    $('#drop').on('click', function(e) {
        marker.animateDrop();
    });

    $('#wobble').on('click', function(e) {
        marker.animateWobble();
    });

    $('#bounce').on('click', function(e) {
        marker.animateBounce();
    })
});
