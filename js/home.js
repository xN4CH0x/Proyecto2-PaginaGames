//Array de objetos
var filas = [
    {
        id: 'lethal-row',
        codigo: '123',
        clase:'',
        nombre: 'Lethal Company',
        categoria: 'Aventura',
        descripcion: 'Lootear y conseguir materiales para la compañía.',
        descripcionLarga: 'Eres un trabajador contratado por la Compañía. Tu trabajo consiste en recoger chatarra de lunas abandonadas e industrializadas para cumplir la cuota de beneficios de la Compañía. Puedes usar el dineroque ganes para viajar a nuevas lunas con mayores riesgos y recompensas...o puedes comprar trajes de lujo y decoraciones para tu nave.',
        checked: 'checked',
        img: '/assets/images/header.jpg',
        iframe:'https://www.youtube.com/embed/qQFUol6k-ig?si=Pr8DyYhFi4oPVQmK',
        iframeMinimizado: '/assets/images/lctrailer.jpg',
        img1: '/assets/images/lc1.jpg',
        img2: '/assets/images/lc2.jpg',
        img3: '/assets/images/lc3.jpg',
        img4: '/assets/images/lc4.jpg',            
    },
    
    {
        id: 'battlefield-row',
        codigo: '124',
        clase:'',
        nombre: 'BATTLEFIELD',
        categoria: 'Acción',
        descripcion: 'disparos y terrorismo.',
        descripcionLarga: 'Domina lo desconocido en la temporada 6. Battlefield™ 2042 es un juego del tipo FPS. Battlefield™ 2042 es un shooter en primera persona que marca el regreso a la emblemática guerra total de la franquicia. Con la ayuda de un arsenal de vanguardia, participa en batallas multijugador intensas e inmersivas. Contiene Violencia y disparos.',
        checked: 'checked',
        img:'https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg',
        iframe:'https://www.youtube.com/embed/WomAGoEh-Ss?si=tVPki-934v5xgZJB',
        iframeMinimizado: 'https://cdn.akamai.steamstatic.com/steam/apps/256975021/movie.184x123.jpg?t=1696978137',
        img1: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/ss_5b422e52477416a027dc3a4373cdd5332a1f341f.600x338.jpg?t=1703193378',
        img2: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/ss_a7ebde7fe03f57e06e53f830b1345a3af9279864.600x338.jpg?t=1703193378',
        img3: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/ss_4c3e1fbdc6c02ba04fc6b37bba55a444fa4e11b4.600x338.jpg?t=1703193378',
        img4: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/ss_a09922fccf91b6842577511fa04459b70725d6b1.600x338.jpg?t=1703193378',              
    },

    {
        id: 'fc24-row',
        codigo: '125',
        clase:'',
        nombre: 'FC24',
        categoria: 'Deportes',
        descripcion: 'Que viva el fulbol.',
        descripcionLarga: '¡Asegurate de anotar muchos goles para ganar a todos y ser el mejor del mundo! EA Sports FC 24 es un videojuego de fútbol, desarrollado por EA, y publicado por EA Sports. Este juego marca la primera entrega de la serie EA Sports FC tras la conclusión de la asociación de EA con FIFA. Fue lanzado a nivel mundial el 29 de septiembre de 2023.',
        checked: 'checked',
        img:'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg',
        iframe:'https://www.youtube.com/embed/-vL01jbgENE?si=rEncnWIOJVZfCA6S',
        iframeMinimizado: 'https://www.mundodeportivo.com/alfabeta/hero/2023/07/ea-sports-fc-24-announce-trailer-a-768x443-1.webp?width=768&aspect_ratio=16:9&format=nowebp',
        img1: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_33527a88323cbb39a7c09d7d74955015343efd3f.600x338.jpg',
        img2: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_96496b17bd35a97ceb926231e963762d3b86c3c8.600x338.jpg',
        img3: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_6c1ef918ffe94050e72dcb2cfad3a95ee3d69f08.600x338.jpg',
        img4: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_f3d31c7cffc2a6ab42fb76aaac2bc9d5258bc142.600x338.jpg',
    },

    {
        id: 'hogwarts-row',
        codigo: '127',
        clase:'',
        nombre: 'Hogwarts Legacy',
        categoria: 'Rol',
        descripcion: 'Adentrate en el mundo de la magia.',
        descripcionLarga: 'Hogwarts Legacy es un RPG de acción en un mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico. Hogwarts Legacy es un RPG de acción en un mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.',
        checked: 'checked',
        img:'https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg',
        iframe:'https://www.youtube.com/embed/S6GTl_vPRvU?si=qx6qzpBs1tElXReo',
        iframeMinimizado: 'https://cdn.akamai.steamstatic.com/steam/apps/256930504/movie.184x123.jpg',
        img1: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.600x338.jpg',
        img2: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.600x338.jpg',
        img3: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.600x338.jpg',
        img4: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.600x338.jpg',
        
    },

    {
        id: 'gtavi-row',
        codigo: '165',
        clase:'table-success',
        nombre: 'GTA VI',
        categoria: 'Acción',
        descripcion: 'Vive la vida loca.',
        descripcionLarga: 'Grand Theft Auto VI (abreviado como GTA VI o GTA 6) es un próximo videojuego que está siendo desarrollado por Rockstar Games. Será la octava entrega principal de dicha serie, tras Grand Theft Auto V de 2013, y la decimosexta en total. Tras años de especulaciones y filtraciones.',
        checked: 'checked',
        img:'https://grupovierci.brightspotcdn.com/dims4/default/b4a04f6/2147483647/strip/false/crop/1920x1080+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2F87%2Fb1%2F502a59b94b4da2c7c505ed4ea985%2Fgta-6.jfif',
        iframe: 'https://www.youtube.com/embed/QdBZY2fkU-0?si=26OnQF0YdHKoQDUS',
        iframeMinimizado: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/6K7MQGIXJNHP5GCVKCFMIBOC4E.jpg',
        img1: 'https://sm.ign.com/t/ign_es/news/e/ex-rocksta/ex-rockstar-dev-reacts-to-gta-6-trailer-its-really-going-to_rbvh.960.jpg',
        img2: 'https://sm.ign.com/t/ign_es/photo/e/ex-rocksta/ex-rockstar-dev-reacts-to-gta-6-trailer-its-really-going-to_ju9s.960.jpg',
        img3: 'https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2023/12/gta6-trailer-gID_7.png@webp',
        img4: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/12/gta-6-3241632.jpg?tf=828x',
        
    }
];



// DESTACADO

function mostrarImagenes(imgMostrarId, ocultarImg1Id, ocultarImg2Id,
    ocultarImg3Id, ocultarImg4Id) {
    let imgMostrar = document.querySelector(imgMostrarId);
    let ocultarImg1 = document.querySelector(ocultarImg1Id);
    let ocultarImg2 = document.querySelector(ocultarImg2Id);
    let ocultarImg3 = document.querySelector(ocultarImg3Id);
    let ocultarImg4 = document.querySelector(ocultarImg4Id);
    ocultarImg1.style.display = 'none';
    ocultarImg2.style.display = 'none';
    ocultarImg3.style.display = 'none';
    ocultarImg4.style.display = 'none';
    imgMostrar.style.display = 'block';
}


// SLIDER CARDS

function App() { }

window.onload = function (event) {
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function (event) {
    const btn = event.currentTarget
    const carruselList = event.currentTarget.parentNode
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselWidth = carrusel[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
}

let prevAction = (leftPosition, carruselWidth, track) => {

    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`
    }

}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {

    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`
    }
}

function buscar(idBuscar, objectArray){
    console.log('entra al buscar');
    for(var i=0; i<objectArray.length; i++){
        console.log('entra al for');
        if(objectArray[i].id === idBuscar){
            console.log('entra al if');
            console.log(objectArray[i].id);
            console.log(i); //Busca el objeto que coincida
            return i; //Devuelve su indice
        }
    }
}
//Recupera datos
filas = JSON.parse(localStorage.getItem('filas'));
juegoDestacado = localStorage.getItem('juegoDestacado');
let indice = buscar(juegoDestacado, filas);
let pagesNombre = filas[indice].id.replace('-row', '');
console.log(pagesNombre);
//Crea el section
let sectionDestacado = document.querySelector('.principalSection');
sectionDestacado.innerHTML = `
<div class="presentacion d-flex flex-column">
<iframe src="${filas[indice].iframe}" title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen class="trailer img-maximizada mb-2" id="trailer-maximizado"></iframe>
<img src="${filas[indice].img1}"
    alt="imagen 1 preview" id="img1-maximizada" class="img-maximizada mb-2">
<img src="${filas[indice].img2}"
    alt="imagen 2 preview" id="img2-maximizada" class="img-maximizada mb-2">
<img src="${filas[indice].img3}"
    alt="imagen 3 preview" id="img3-maximizada" class="img-maximizada mb-2">
<img src="${filas[indice].img4}"
    alt="imagen 4 preview" id="img4-maximizada" class="img-maximizada mb-2">

<div class="imagenes-presentacion d-flex">
    <img src="${filas[indice].iframeMinimizado}"
        alt="trailer Preview" id="trailer-preview"
        onclick="mostrarImagenes('#trailer-maximizado', '#img1-maximizada', '#img2-maximizada', '#img3-maximizada', '#img4-maximizada')">
    <img src="${filas[indice].img1}"
        alt="imagen 1 preview" id="img1-preview"
        onclick="mostrarImagenes('#img1-maximizada', '#trailer-maximizado', '#img2-maximizada', '#img3-maximizada', '#img4-maximizada')">
    <img src="${filas[indice].img2}"
        alt="imagen 2 preview" id="img2-preview"
        onclick="mostrarImagenes('#img2-maximizada', '#trailer-maximizado', '#img1-maximizada', '#img3-maximizada', '#img4-maximizada')">
    <img src="${filas[indice].img3}"
        alt="imagen 3 preview" id="img3-preview"
        onclick="mostrarImagenes('#img3-maximizada', '#trailer-maximizado', '#img2-maximizada', '#img1-maximizada', '#img4-maximizada')">
    <img src="${filas[indice].img4}"
        alt="imagen 4 preview" id="img4-preview" class="m-0"
        onclick="mostrarImagenes('#img4-maximizada', '#trailer-maximizado', '#img2-maximizada', '#img3-maximizada', '#img1-maximizada')">

</div>
</div>


<div class="logo-descripcion d-flex flex-column align-items-md-center align-items-xl-start px-2">
<img src="${filas[indice].img}"
    alt="logo ${filas[indice].nombre}" class="mb-2 headerImage" id="${filas[indice].id}-header"></a>
<div class="parrafos align-self-center text-white">
    <p>${filas[indice].descripcionLarga}</p>
    
</div>

    <div class="botonDescargar mt-2 p-2 px-4 align-self-center d-flex align-items-center">
        <a href="/pages/${pagesNombre}.html" class="text-light">
            <h3>Ver mas</h3>
        </a>
    </div>
</div>
`


