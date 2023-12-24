window.onload = function() {
    const s_blue = document.getElementById('blue');
    const s_red = document.getElementById('red');
    const s_green = document.getElementById('green');
    const s_yellow = document.getElementById('yellow');

    s_blue.addEventListener('click', () => {
        s_blue.style.backgroundColor = "black";
    });
    
    s_red.addEventListener('click', () => {
        s_red.style.backgroundColor = "black";
    });

    s_green.addEventListener('click', () => {
        s_green.style.backgroundColor = "black";
    }); 

    s_yellow.addEventListener('click', () => {
        s_yellow.style.backgroundColor = "black";
    }); 
}

