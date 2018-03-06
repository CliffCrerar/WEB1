import _ from 'lodash';
// BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// BOOTSTRAP TOGGLER
import '../bootstrap-toggle/css/bootstrap-toggle.css';
import '../bootstrap-toggle/js/bootstrap-toggle';

// FONT AWESOME
import ''

// SKYCONS
import skycons from 'skycons';
//console.log(skycons());

// CSS
import './index.css';

// HTML
import pagebody from './html/body.html';

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
//$('body').append(pagebody);
//$('#dsImg').attr('src', dsImg);
//$("#toggle").attr("disabled", true); //disable toggle
//$("#weather").hide(); //hide weather info until API is loaded
//require('./js/toggler');


//GET POS
const getLink = require('./js/getApiLink');
const displayForecast = require('./js/getWeatherData');
let pos;
let apiLink;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        pos = position;
        Promise.resolve(pos)
            .then(function(val) {
                console.log(val);
                apiLink = getLink(val);
                console.log(apiLink);
            })
            .then(function() {
                console.log(apiLink);
                displayForecast(apiLink);
            });
    });
}