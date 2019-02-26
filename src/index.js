module.exports = function getLoveTrianglesCount(preferences) {
    var count = 0;
    for (var i=1; i <= preferences.length; i++){
        var k = preferences[i-1];
        var n = preferences[k-1]
        if (preferences[i-1]===k && preferences[k-1]===n && preferences[n-1]===i){
            count++;
        }
    }
    return(Math.floor(count/3));
};