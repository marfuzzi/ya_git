const back = document.querySelector('.back');
if (back) {
    back.addEventListener('click', () => {
        window.history.back();
    });
}
