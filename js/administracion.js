function destacar(destacarId){
    filas = JSON.parse(localStorage.getItem('filas'));
    let filaDestacar = document.getElementById(destacarId);
    for(let i=0; i<filas.length; i++){
        if(destacarId === filas[i].id){
            if(filas[i].clase.includes('table-success') && filaDestacar.classList.contains('table-success')){
                filas[i].clase = 'table-light';
                filaDestacar.classList.remove('table-success');
                filaDestacar.classList.add('table-light');
                localStorage.setItem('filas', JSON.stringify(filas));     
            }
            else{
                filas[i].clase = 'table-success';
                filaDestacar.classList.add('table-success');
                filaDestacar.classList.remove('table-light');
                localStorage.setItem('filas', JSON.stringify(filas));         
            }
        }
        else{
            let filaNormal = document.getElementById(filas[i].id);
            if(filas[i].clase.includes('table-success') && filaNormal.classList.contains('table-success')){
                filas[i].clase = 'table-light' ;
                filaNormal.classList.remove('table-success');
                filaNormal.classList.add('table-light') ;
                localStorage.setItem('filas', JSON.stringify(filas));       
            }
            else if(!(filas[i].clase.includes('table-light'))){
                filas[i].clase = 'table-light';
                filaNormal.classList.add('table-light');
                localStorage.setItem('filas', JSON.stringify(filas));   
            }
        }        
    }   
}

function borrar(borrarId){
    filas = JSON.parse(localStorage.getItem('filas')); //Obtengo el array de objetos
    filas.splice(buscar(borrarId, filas), 1);
    console.log(filas)
    localStorage.setItem('filas', JSON.stringify(filas));
    location.reload();
}



function agregarJuego(){
    //Recupera los datos de los input
    let nuevoCodigo = document.querySelector('#codigo').value;
    let nuevoNombre = document.querySelector('#nombre').value;
    let nuevoId = nuevoNombre + '-row';
    let nuevoCategoria = document.querySelector('#categoria').value;
    let nuevoDesc = document.querySelector('#descripcion').value;
    let nuevoChecked = document.querySelector('#disponible').value;
    nuevoChecked.toLowerCase();
    if(nuevoChecked !== 'true' && nuevoChecked !== 'false'){
        nuevoChecked = true;
    }
    //Crea un objeto nuevo para agregar al array de objetos Fila
    var nuevoObjeto = {
        id: nuevoId,
        clase:'',
        codigo: nuevoCodigo,
        nombre: nuevoNombre,
        categoria: nuevoCategoria,
        descripcion: nuevoDesc,
        checked: nuevoChecked, 
    };
    filas = JSON.parse(localStorage.getItem('filas'));
    filas.push(nuevoObjeto); 
    localStorage.setItem('filas', JSON.stringify(filas));
    location.reload();
}

function editarJuego(){
    //Recupera los datos de los input
    let nuevoCodigo = document.querySelector('#codigo-editar').value;
    let nuevoNombre = document.querySelector('#nombre-editar').value;
    let nuevoId = nuevoNombre + '-row';
    let nuevoCategoria = document.querySelector('#categoria-editar').value;
    let nuevoDesc = document.querySelector('#descripcion-editar').value;
    let nuevoChecked = document.querySelector('#disponible').value;
    nuevoChecked.toLowerCase();
    if(nuevoChecked !== 'true' && nuevoChecked !== 'false'){
        nuevoChecked = true;
    }
    //Recupera los datos de la id de la fila a editar y de las filas desde el Local Storage
    let editarId = localStorage.getItem('editarId');
    filas = JSON.parse(localStorage.getItem('filas'));
    //Recorre el arreglo en busca del objeto que tiene la misma id de la que se busca editar
    for(let i=0; i<filas.length; i++){
        if(filas[i].id === editarId){
            if(nuevoCodigo.length != 0){
                filas[i].codigo = nuevoCodigo;
                localStorage.setItem('filas', JSON.stringify(filas));
            }
            if(nuevoNombre.length != 0){
                filas[i].nombre = nuevoNombre;
                filas[i].id = nuevoId;
                localStorage.setItem('filas', JSON.stringify(filas));        
            }
            if(nuevoCategoria.length != 0){
                filas[i].categoria = nuevoCategoria;
                localStorage.setItem('filas', JSON.stringify(filas));                               
            }
            if(nuevoDesc.length != 0){
                filas[i].descripcion = nuevoDesc;
                localStorage.setItem('filas', JSON.stringify(filas));                
            }
            if(nuevoChecked.length != 0){
                filas[i].checked = nuevoChecked;
                localStorage.setItem('filas', JSON.stringify(filas));
            }        
        }
        
    }
    location.reload();
}

// <========================== FUNCIONES SOPORTE =========================>

//FUNCION PARA BUSCAR EL INDICE DEL OBJETO QUE QUIERE BORRAR
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

//FUNCION PARA GUARDAR LA ID QUE SE QUIERE EDITAR EN LOCALSTORAGE
function enviarId(idEditar){ 
    let editarId = idEditar;
    localStorage.setItem('editarId', editarId);
    console.log(editarId);
}

//FUNCION PARA CAMBIAR EL ESTADO DEL CHECKED 
function cambiarChecked(checkboxId, filaId){
    filas = JSON.parse(localStorage.getItem('filas'));
    for(let i=0; i<filas.length; i++){
        if(filas[i].id === filaId){
            console.log(filas[i].id);
            if(filas[i].checked === 'true'){
                filas[i].checked = 'false';
                console.log('if');
                localStorage.setItem('filas', JSON.stringify(filas));
                filas = JSON.parse(localStorage.getItem('filas'));
                console.log(filas[i].checked);
            }
            else if(filas[i].checked.length === 0){
                filas[i].checked = 'true';
                console.log('else if');
                
                localStorage.setItem('filas', JSON.stringify(filas));
                filas = JSON.parse(localStorage.getItem('filas'));
                console.log(filas[i].checked);
            }
            else{
                filas[i].checked = 'true'
                console.log('else');
                
                localStorage.setItem('filas', JSON.stringify(filas));
                filas = JSON.parse(localStorage.getItem('filas'));
                console.log(filas[i].checked);
            }
        }
    }
    localStorage.setItem('filas', JSON.stringify(filas));
    
}

var filas = [
    {
        id: 'lethal-row',
        codigo: '123',
        clase:'table-success',
        nombre: 'Lethal Company',
        categoria: 'Terror',
        descripcion: 'Lootear y conseguir materiales para la compañía.',
        checked: 'true',       
    },
    
    {
        id: 'csgo-row',
        codigo: '124',
        clase:'',
        nombre: 'CSGO',
        categoria: 'FPS',
        descripcion: 'disparos y terrorismo.',
        checked: 'true',      
    },

    {
        id: 'rocket-row',
        codigo: '125',
        clase:'',
        nombre: 'Rocket League',
        categoria: 'Deportes',
        descripcion: 'Autos voladores y fútbo.l',
        checked: 'true',        
    },

    {
        id: 'lol-row',
        codigo: '126',
        clase:'',
        nombre: 'League of Legends',
        categoria: 'MOBA',
        descripcion: '5 conos contra 5 conos.',
        checked: 'true',  
    },

    {
        id: 'outlast-row',
        codigo: '127',
        clase:'',
        nombre: 'Outlast',
        categoria: 'Terror',
        descripcion: 'Persecusiones en un manicomio.',
        checked: 'true',
    },
];


var filas = JSON.parse(localStorage.getItem('filas'));
var filaDatos = filas.map(fila =>{
    var tabla = document.querySelector('tbody');
    tabla.innerHTML += `
    <tr class="table-row ${fila.clase}" id="${fila.id}">
        <th scope="row">${fila.codigo}</th>
        <td>${fila.nombre}</td>
        <td>${fila.categoria}</td>
        <td class="descripcion-columna">${fila.descripcion}</td>
        <td class="text-center"><input class="checkbox" id="checkbox-${fila.id}" type="checkbox" checked="${fila.checked}" onclick="cambiarChecked('checkbox-${fila.id}', '${fila.id}')"></td>
        <td class="d-flex opciones-botones">
            <img src="/assets/images/trash-solid.svg" alt="Eliminar" id="eliminar" onclick="borrar('${fila.id}')">
            <img src="/assets/images/pen-to-square-regular.svg" alt="Editar" id="editar" data-bs-toggle="modal" data-bs-target="#editarModal" onclick="enviarId('${fila.id}')">
            <img src="/assets/images/star-regular.svg" alt="Destacar" id="destacar" onclick ="destacar('${fila.id}')">
        </td>
    </tr>
    `
});