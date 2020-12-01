
exports.Translator = function Translator () {
};

exports.Translator.prototype.translate = function () {
    //console.log(global.browser_langs);
    
    // read language file
    const fs = require('fs');
    let data = fs.readFileSync('./locales/' + global.lang + '.json');
    var translations = JSON.parse(data, null);
    
    // set time strings to language
    global.ms = translations['ms'];
    global.mss = translations['mss'];
    global.sec = translations['sec'];
    global.secs = translations['secs'];
    global.min = translations['min'];
    global.mins = translations['mins'];
    global.hour = translations['hour'];
    global.hours = translations['hours'];
    global.day = translations['day'];
    global.days = translations['days'];
    
    return function(text, render) {
        if (translations[render(text)]) {
            return translations[render(text)];
        } else {
            return render(text);
        }
    };
};
