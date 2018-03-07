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

    var selectIcon = function(icon, iconHtml) {
        console.log('switch: ', icon);
        let selectedIconHtml;
        switch (icon) {
            /* 1 */
            case 'clear-day':
                selectedIconHtml = $(iconHtml).find($('.container-icon-clear-day'));
                break;
                /* 2 */
            case 'clear-night':
                selectedIconHtml = $(iconHtml).find($('.container-icon-clear-night'));
                break;
                /* 3 */
            case 'rain':
                selectedIconHtml = $(iconHtml).find($('.container-icon-rain'));
                break;
                /* 4 */
            case 'snow':
                selectedIconHtml = $(iconHtml).find($('.container-icon-snow'));
                break;
                /* 5 */
            case 'sleet':
                selectedIconHtml = $(iconHtml).find($('.container-icon-sleet'));
                break;
                /* 6 */
            case 'wind':
                selectedIconHtml = $(iconHtml).find($('.container-icon-wind'));
                break;
                /* 7 */
            case 'fog':
                selectedIconHtml = $(iconHtml).find($('.container-icon-fog'));
                break;
                /* 8 */
            case 'cloudy':
                selectedIconHtml = $(iconHtml).find($('.container-icon-cloudy'));
                break;
                /* 9 */
            case 'partly-cloudy-day':
                selectedIconHtml = $(iconHtml).find($('.container-icon-partly-cloudy-day'));
                break;
                /* 10 */
            case 'partly-cloudy-night':
                selectedIconHtml = $(iconHtml).find($('.container-icon-partly-cloudy-night'));
                break;
                /* 11 */
            case 'hail':
                selectedIconHtml = $(iconHtml).find($('.container-icon-hail'));
                break;
                /* 12 */
            case 'thunderstorm':
                selectedIconHtml = $(iconHtml).find($('.container-icon-thunderstorm'));
                break;
                /* 13 */
            case 'tornado':
                selectedIconHtml = $(iconHtml).find($('.container-icon-tornado'));
                break;
        }
        return selectedIconHtml;
    };
    let iconMap = {
        'container-icon-clear-day': 'clear-day',
        'container-icon-clear-night': 'clear-day',
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
        //console.log(value[0].children[1]);
        //console.log(key);
        //console.log((value[0].className));
        var iconHtml = value[0];
        var htmlSearchClass = iconHtml.className;
        //console.log(iconMap[htmlSearchClass]);
        //console.log(icon);
        console.log($(iconHtml));
        $(iconHtml).find('h3').remove();
        console.log();
        if (icon == iconMap[htmlSearchClass]) {
            $('#wIcon').append(iconHtml);
        }
    });

};