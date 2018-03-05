import _ from 'lodash';
// BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// BOOTSTRAP TOGGLER
import '../bootstrap-toggle/css/bootstrap-toggle.css';
import '../bootstrap-toggle/js/bootstrap-toggle';

// SKYCONS
import skycons from 'skycons';

// CSS
import './index.css';

// HTML
import pagebody from './html/body.html';

// IMAGES
import imageURLLoading from './image/spectrum.jpg';
import imageURLClearDay from './image/norwegian_clarity_bg.jpg';
import imageURLClearNight from './image/mostly-clear-night-in-seattle.jpg';
import imageURLRain from './image/thumb-1920-83196.jpg';
import imageURLSnowSleet from './image/Beautiful-Winter-Night-Wallpaper-for-PC.jpg';
import imageURLWind from './image/windy-drone.jpg';
import imageURLFog from './image/38751823-fog-hd-wallpapers.jpg';
import imageURLCloudyDay from './image/Weather-Pictures.jpg';
import imageURLCloudyNight from './image/NShrsK.jpg';
import dsImg from './image/dsimg.png';

Promise.resolve($('body').append(pagebody))
    .then(function() {
        //$('#dsImg').attr('src', dsImg);
        //$("#toggle").attr("disabled", true); //disable toggle
        //$("#weather").hide(); //hide weather info until API is loaded
        //var toggler = require('./js/toggler');
    });