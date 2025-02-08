var NameUser = "BUBA";
var Password = "ciao";
const gallery = document.getElementById('imageGallery');

function Login()
{
    const Name = document.getElementById("Username").value;
    const pass =  document.getElementById("Pass").value;

    if(Name == NameUser && pass == Password)
    {
        window.location.href = 'https://ttbuba.github.io/X-tr0/main.html';
    }
}

function loadImage()
{
    const imagePath = Array.from({length: 195}, (_, i) => 
        `Photo/${i + 1}.jpg`);

    imagePath.forEach(path => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = path;
        gallery.appendChild(item);
        item.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded',loadImage)