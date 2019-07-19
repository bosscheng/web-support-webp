/*
* author:
* date: 6/27/18
* desc: 查看 网页是否支持 webp格式的图片。
*/
!(function () {

    function supportWebp(callback) {
        var webp = undefined;

        if (webp !== undefined) {
            callback(webp);
            return;
        }

        var image = new Image();
        image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';

        image.onerror = image.onload = function () {
            if (image.width === 1 && image.height === 1) {
                webp = true;
            } else {
                webp = false;
            }
            callback(webp);
        };
    }

    // RequireJS && SeaJS
    if (typeof define === 'function') {
        define(function () {
            return supportWebp;
        });
        // NodeJS
    } else if (typeof exports !== 'undefined') {
        module.exports = supportWebp;
    } else {
        // browser
        window.supportWebp = supportWebp;
    }
})();
