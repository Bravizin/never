function yes() {
    location.href = "https://api.whatsapp.com/send?phone=5511947008542&text=Aceito%2C%20onde%20vamos?";
}

function runPlis(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = positionGenerate(10, 90);
    btn.style.left = positionGenerate(10, 90);
}

function positionGenerate(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}