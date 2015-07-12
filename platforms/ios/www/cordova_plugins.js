cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.hidden-statusbar-overlay/www/hidden-statusbar-overlay.js",
        "id": "de.appplant.cordova.plugin.hidden-statusbar-overlay.HiddenStatusbarOverlay",
        "clobbers": [
            "plugin.statusbarOverlay"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "2.0.0",
    "cordova-plugin-whitelist": "1.0.0",
    "de.appplant.cordova.plugin.hidden-statusbar-overlay": "1.2.0"
}
// BOTTOM OF METADATA
});