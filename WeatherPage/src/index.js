import _ from 'lodash';
// BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// BOOTSTRAP TOGGLER
import '../bootstrap-toggle/css/bootstrap-toggle.css';
import '../bootstrap-toggle/js/bootstrap-toggle';

// FONT AWESOME
import 'font-awesome-sass-loader';

// WEATHER ICONS
import './wi/TweenMax';
import './wi/main.css';


// CSS
import './index.css';

// HTML
import pagebody from './html/body.html';

// CUSTOM JS FUNCTIONS
import getLink from './js/getApiLink';
import displayForecast from './js/getWeatherData';

// IMAGES
import imageURLLoading from './image/spectrum.jpg';
import imageURLClearDay from './image/nwc.jpg';
import imageURLClearNight from './image/mcnis.jpg';
import imageURLRain from './image/th1.jpg';
import imageURLSnowSleet from './image/bwnwfp.jpg';
import imageURLWind from './image/winddrone.jpg';
import imageURLFog from './image/foghdwp.jpg';
import imageURLCloudyDay from './image/wp.jpg';
import imageURLCloudyNight from './image/nshrs.jpg';
import dsImg from './image/dsimg.png';
$('body').append(pagebody);

$('#dsImg').attr('src', dsImg);
$("#toggle").attr("display", 'none'); //disable toggle
$("#weather").hide(); //hide weather info until API is loaded
require('./js/toggler');

let pos;
let apiLink;
let icon;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        pos = position;
        Promise.resolve(pos)
            .then(function(val) {
                //console.log(val);
                apiLink = getLink(val);
            }).then(function() {
                Promise.resolve(displayForecast(apiLink))
                    .then(function() {
                        setBackground(localStorage.icon);
                    });
            });


    });
}

var setBackground = function(icon) {
    console.log(icon);
    switch (icon) { //case to set background image
        case ('clear-day'):
            $('body').css('background-image', 'url(' + imageURLClearDay + ')');
            break;
        case ('clear-night'):
            $('body').css('background-image', 'url(' + imageURLClearNight + ')');
            break;
        case ('rain'):
            $('body').css('background-image', 'url(' + imageURLRain + ')');
            break;
        case ('snow'):
            $('body').css('background-image', 'url(' + imageURLSnowSleet + ')');
            break;
        case ('sleet'):
            $('body').css('background-image', 'url(' + imageURLSnowSleet + ')');
            break;
        case ('wind'):
            $('body').css('background-image', 'url(' + imageURLWind + ')');
            break;
        case ('fog'):
            $('body').css('background-image', 'url(' + imageURLFog + ')');
            break;
        case ('cloudy'):
            $('body').css('background-image', 'url(' + imageURLCloudyDay + ')');
            break;
        case ('partly-cloudy-day'):
            $('body').css('background-image', 'url(' + imageURLCloudyDay + ')');
            break;
        case ('partly-cloudy-night'):
            $('body').css('background-image', 'url(' + imageURLCloudyNight + ')');
            break;
        default:
            $('body').css('background-image', 'url(' + imageURLLoading + ')'); //set default background;
    }
}