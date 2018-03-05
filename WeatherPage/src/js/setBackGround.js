function setBackground(icon) {
    switch (icon) { //case to set background image
        case ('clear-day'):
            $('body').css('background-image', 'url("' + imageURLClearDay + '")');
            break;
        case ('clear-night'):
            $('body').css('background-image', 'url("' + imageURLClearNight + '")');
            break;
        case ('rain'):
            $('body').css('background-image', 'url("' + imageURLRain + '")');
            break;
        case ('snow'):
            $('body').css('background-image', 'url("' + imageURLSnowSleet + '")');
            break;
        case ('sleet'):
            $('body').css('background-image', 'url("' + imageURLSnowSleet + '")');
            break;
        case ('wind'):
            $('body').css('background-image', 'url("' + imageURLWind + '")');
            break;
        case ('fog'):
            $('body').css('background-image', 'url("' + imageURLFog + '")');
            break;
        case ('cloudy'):
            $('body').css('background-image', 'url("' + imageURLCloudyDay + '")');
            break;
        case ('partly-cloudy-day'):
            $('body').css('background-image', 'url("' + imageURLCloudyDay + '")');
            break;
        case ('partly-cloudy-night'):
            $('body').css('background-image', 'url("' + imageURLCloudyNight + '")');
            break;
        default:
            $("body").css("background-image", "url('" + imageURLLoading + "')"); //set default background;
    }
}