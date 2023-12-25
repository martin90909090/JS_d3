let color1, color2;

const createDiv = (color2 = "white") => {
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.backgroundColor = color2;
    div.style.border = '10px solid black';
    document.body.appendChild(div);
};

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            color1 = 'pink';
            break;
        case 's':
            color1 = 'orange';
            break;
        case 'd':
            color1 = 'skyblue';
            break;
        case 'q':
            color2 = 'purple';
            createDiv(color2);
            break;
        case 'w':
            color2 = 'gray';
            createDiv(color2);
            break;
        case 'e':
            color2 = 'brown';
            createDiv(color2);
            break;
    }

    document.getElementById('key').style.backgroundColor = color1;
});