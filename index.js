import * as tf from '@tensorflow/tfjs';

function drag(id,pos){
    const movable = document.getElementById(id);
    if(movable==null) return;
    const mouseDownEvent = new MouseEvent('mousedown', {
            clientX: movable.getBoundingClientRect().left,
            clientY: movable.getBoundingClientRect().top,
            pageX: 0,
            pageY: 0,
            bubbles: true,
            cancelable: true,
            view: window
        });
    const mouseMoveEvent = new MouseEvent('mousemove', {
        clientX: movable.getBoundingClientRect().left+pos,
        clientY: movable.getBoundingClientRect().top,
        bubbles: true,
        cancelable: true,
        view: window
    });
    const mouseUpEvent = new MouseEvent('mouseup',{
        pageX: movable.getBoundingClientRect().left+pos,
        pageY: movable.getBoundingClientRect().top,
        bubbles: true,
        cancelable: true,
        view: window
    });

    movable.dispatchEvent(mouseDownEvent)
    setTimeout(()=>movable.dispatchEvent(mouseMoveEvent),500);
    setTimeout(()=>movable.dispatchEvent(mouseUpEvent),550);
}

function predict(img,model){
    var elem=document.createElement('canvas');
    elem.setAttribute("width",224);
    elem.setAttribute("height",224);
    let ctx=elem.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 224, 224);
    let imageData = tf.browser.fromPixels(elem);
    imageData = tf.stack([imageData]);
    
    model.predict(imageData).data().then(result=>{
        drag('slideBlock', result[1]);
    });
}

function main(model){   
    let img = document.getElementById("slideBg");
    if(img.complete)
        predict(img,model);
    else
        img.onload=()=>{
            predict(img,model);
        };   
}

tf.loadLayersModel('https://raw.githubusercontent.com/ffantasy/CapchaBot/master/object_detection_model/model.json').then(m=>main(m));