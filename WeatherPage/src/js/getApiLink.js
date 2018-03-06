module.exports = function(position) {
    //Dycryption function
    const decrypt = function(key) {
        var keyLen = key.length;
        var oLetter = "";
        var nPos = 0;
        var nLetter = "";
        var nKey = "";

        for (var i = 0; i < keyLen; i++) {
            oLetter = key[i];
            nPos = key.codePointAt(i) - 13;
            nLetter = String.fromCharCode(nPos);
            nKey = nKey + nLetter;
        }
        return nKey;
    };

    //variables for weather data fetch
    var posLat;
    var posLong;
    var sUrl = "https://crossorigin.me/https://api.darksky.net/forecast/";
    var encKey = "o=Fo=>ADn>nprsDCE?ror==s=qAns>qC";
    var apiLink = "";


    posLat = position.coords.latitude;
    posLong = position.coords.longitude;
    apiLink = sUrl + decrypt(encKey) + "/" + posLat + "," + posLong + "?exclude=alerts,flags";

    return apiLink;
};