module.exports = function(icon) {
    //console.log(iconHtml);
    /*
    1.  clear-day           --> container-icon-clear-day
    2.  clear-night         --> container-icon-clear-night
    3.  rain                --> container-icon-rain
    4.  snow                --> container-icon-snow
    5.  sleet               --> container-icon-sleet
    6.  wind                --> container-icon-wind
    7.  fog                 --> container-icon-fog
    8.  cloudy              --> container-icon-cloudy
    9.  partly-cloudy-day   --> container-icon-partly-cloudy-day
    10. partly-cloudy-night --> container-icon-partly-cloudy-night
    11. hail                --> container-icon-hail
    12. thunderstorm        --> container-icon-thunderstorm
    13. tornado             --> container-icon-tornado
     */

    //icon = 'thunderstorm'

    let iconMap = {
        'container-icon-clear-day': 'clear-day',
        'container-icon-clear-night': 'clear-night',
        'container-icon-rain': 'rain',
        'container-icon-snow': 'snow',
        'container-icon-sleet': 'sleet',
        'container-icon-wind': 'wind',
        'container-icon-fog': 'fog',
        'container-icon-cloudy': 'cloudy',
        'container-icon-partly-cloudy-day': 'partly-cloudy-day',
        'container-icon-partly-cloudy-night': 'partly-cloudy-night',
        'container-icon-hail': 'hail',
        'container-icon-thunderstorm': 'thunderstorm',
        'container-icon-tornado': 'tornado'
    };


    var iconHtmlGroup = $(require('../wi/wi.html')).children();
    const iconHtmlArr = (_.chunk(iconHtmlGroup, 1));
    //console.log(iconHtmlArr);
    _.forEach(iconHtmlArr, function(value, key) {
        var iconHtml = value[0];
        var htmlSearchClass = iconHtml.className;
        $(iconHtml).find('h3').remove();
        if (icon == iconMap[htmlSearchClass]) {
            $('#wIcon').append(iconHtml);
        }
    });

};