// ==UserScript==
// @name         CapchaBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       FFantasy
// @match        https://t.captcha.qq.com/cap_union_new_show*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js
// @require      https://raw.githubusercontent.com/ffantasy/CapchaBot/master/utility.js?4
// ==/UserScript==

(function() {
    'use strict';
    function main(model){
    let img = document.getElementById("slideBg");
        img.onload=()=>{
            setTimeout(() => {
                predict(img,model);
            }, 1000);
        };
        if(img.complete)
        {
            setTimeout(() => {
                predict(img,model);
            }, 1000);
        }
    }

    tf.loadLayersModel('https://raw.githubusercontent.com/ffantasy/CapchaBot/master/object_detection_model/model.json').then(m=>main(m));
})();