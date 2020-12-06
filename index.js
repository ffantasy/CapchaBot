import * as tf from '@tensorflow/tfjs';

function main(){
    model.summary();
    
    let img = document.getElementById("slideBg");

    var elem=document.createElement('canvas');
    elem.setAttribute("width",224);
    elem.setAttribute("height",224);
    let ctx=elem.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 224, 224);
    let imageData = tf.browser.fromPixels(elem);
    imageData = tf.stack([imageData]);
    debugger;
}

var model = await tf.loadLayersModel(LOCAL_MODEL_PATH).then(main);