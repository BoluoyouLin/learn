let XValue = 0,YValue = 0;
function rotateTop() {
    let cube = document.getElementById('cube');
    XValue += 90;
    cube.style.cssText = 'transform: rotateX('+XValue+'deg) rotateY('+YValue+'deg)';
}

function rotateBottom() {
    let cube = document.getElementById('cube');
    XValue -= 90;
    cube.style.cssText = 'transform: rotateX('+XValue+'deg) rotateY('+YValue+'deg)';
}

function rotateLeft() {
    let cube = document.getElementById('cube');
    YValue -= 90;
    cube.style.cssText = 'transform: rotateX('+XValue+'deg) rotateY('+YValue+'deg)';
}

function rotateRight() {
    let cube = document.getElementById('cube');
    YValue += 90;
    cube.style.cssText = 'transform: rotateX('+XValue+'deg) rotateY('+YValue+'deg)';
}
