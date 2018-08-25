var cible;
var offsetX, offsetY;

Windows = document.getElementsByClassName('window');
for (var i = 0; i < Windows.length; i++) {
    Windows[i].addEventListener('mousedown', function (e) {
        for (var i = 0; i < Windows.length; i++) {
            if (e.currentTarget.style.zIndex != Windows.length) {
                Windows[i].style.zIndex--;
                Windows[i].style.removeProperty("box-shadow");
            }
        }
        e.currentTarget.style.zIndex = Windows.length;
        e.currentTarget.style.boxShadow = "0 5pt 20pt #1016";
    });

    document.getElementsByClassName('border')[i].addEventListener('mousedown', function (e) {
        offsetX = e.pageX - e.currentTarget.parentNode.offsetLeft;
        offsetY = e.pageY - e.currentTarget.parentNode.offsetTop;
        cible = e.currentTarget.parentNode;
        document.body.insertAdjacentHTML('beforeend', '<div id="secureDrag" style="z-index:999;position:absolute;top:0;bottom:0;left:0;right:0;background:none;cursor:move;-webkit-user-select:none;"></div>');
    });
}

document.body.addEventListener('mousemove', function (e) {
    if (cible) {
        cible.style.left = e.pageX - offsetX + 'px';
        cible.style.top = e.pageY - offsetY + 'px';
    }
});
document.body.addEventListener('mouseup', function () {
    cible = null;
    if (document.getElementById('secureDrag') !== null) {
        document.getElementById('secureDrag').outerHTML = null;
    }
});