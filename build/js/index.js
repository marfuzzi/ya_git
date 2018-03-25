'use strict';

var back = document.querySelector('.back');
if (back) {
    back.addEventListener('click', () => {
        window.history.back();
    });
}
