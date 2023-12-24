let color;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            color = 'pink';
            break;
        case 's':
            color = 'orange';
            break;
        case 'd':
            color = 'skyblue';
            break;
        default:
            color = 'white';
            break;
    }

    document.getElementById('key').style.backgroundColor = color;
});