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
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "2.0.0",
    "cordova-plugin-whitelist": "1.0.0",
    "de.appplant.cordova.plugin.hidden-statusbar-overlay": "1.2.0",
    "cordova-plugin-inappbrowser": "1.0.1"
}
// BOTTOM OF METADATA
});