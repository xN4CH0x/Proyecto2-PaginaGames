function destacar(rowId, primeraRowId, segundaRowId, terceraRowId, cuartaRowId){
    let row = document.querySelector(rowId);
    let primeraRow = document.querySelector(primeraRowId);
    let segundaRow = document.querySelector(segundaRowId);
    let terceraRow = document.querySelector(terceraRowId);
    let cuartaRow = document.querySelector(cuartaRowId);
    if(row.classList.contains('table-success')){
        row.classList.remove('table-success');
        row.classList.add('table-light')
    }
    else{
        row.classList.remove('table-light');
        primeraRow.classList.remove('table-success');
        segundaRow.classList.remove('table-success');
        terceraRow.classList.remove('table-success');
        cuartaRow.classList.remove('table-success');
        row.classList.add('table-success');
    }   
}

function borrar(borrarId){
    let borrado = document.querySelector(borrarId);
    borrado.style.display = 'none';
}

function nuevoDestacar(rowId){
    var rowDestacar = document.querySelector(rowId);
    
    filas.forEach(rowActual=>{
        console.log('ENTRA AL FOREACH');
        let rowNormal = document.querySelector(rowActual.id); //ESTA TOMANDO MAL ESTA COSA AAAAAAAJHKGFDJSDJFGVNLHJRTKNWJHRT
        if(rowDestacar==rowNormal){
            console.log('PRIMER IF');
            if(rowDestacar.classList.contains('table-success')){
                console.log('SEGUNDO IF');
                rowDestacar.classList.remove('table-success');
                rowDestacar.classList.add('table-light')
                console.log(rowDestacar);
            }
            else{
                rowDestacar.classList.remove('table-light');
                rowDestacar.classList.add('table-success');
            }
        }
        else{
            if(rowNormal.classList.contains('table-success')){
                rowNormal.classList.remove('table-success');
                rowNormal.classList.add('table-light');
            }
            else if(!(rowNormal.classList.contains('table-light'))){
                rowNormal.classList.add('table-light');
            }
        }
    });
    // for(var i=0; filas.length()<i; i++){
    //     console.log(rowNormal);
    //     let rowNormal = document.querySelector(filas[i].id);
        
        
    //     if(rowDestacar==rowNormal){
    //         if(rowDestacar.classList.contains('table-success')){
    //             rowDestacar.classList.remove('table-success');
    //             rowDestacar.classList.add('table-light')
    //             console.log(rowDestacar);
    //         }
    //         else{
    //             rowDestacar.classList.remove('table-light');
    //             rowDestacar.classList.add('table-success');
    //         }
    //     }
    //     else{
    //         if(rowNormal.classList.contains('table-success')){
    //             rowNormal.classList.remove('table-success');
    //             rowNormal.classList.add('table-light');
    //         }
    //         else if(!(rowNormal.classList.contains('table-light'))){
    //             rowNormal.classList.add('table-light');
    //         }
    //     }
    // }
}

function guardarDato(){
    //Recupera los datos de los input
    var nuevoCodigo = document.querySelector('#codigo').value;
    var nuevoNombre = document.querySelector('#nombre').value;
    var nuevoId = nuevoNombre + '-row';
    var nuevoCategoria = document.querySelector('#categoria').value;
    var nuevoDesc = document.querySelector('#descripcion').value;

    //Crea un objeto nuevo para agregar al array de objetos Fila
    var nuevoObjeto = {
        id: nuevoId,
        codigo: nuevoCodigo,
        nombre: nuevoNombre,
        categoria: nuevoCategoria,
        descripcion: nuevoDesc,
        onclick: "destacar( '#outlast-row', '#lol-row', '#csgo-row', '#lethal-row', '#rocket-row')",
        borrarOnClick: "borrar('#outlast-row')",
    };
    console.log(nuevoObjeto); //Para ver si se creó (Sí se agrego)
    filas.push(nuevoObjeto); //Agrega el objeto al array Filas
    console.log(filas); //Para ver si se agregó (Sí se agregó)

    //ERROR: Se agrega el nuevo objeto al array, pero en el mapeo no lo crea
}


var filas = [
    {
        id: 'lethal-row',
        codigo: '123',
        nombre: 'Lethal Company',
        categoria: 'Terror',
        descripcion: 'pinga pinga pinga pinga pinga pinga',
        onclick: "nuevoDestacar('#lethal-row')",
        borrarOnClick: "borrar('#lethal-row')",
    },
    
    {
        id: 'csgo-row',
        codigo: '124',
        nombre: 'CSGO',
        categoria: 'FPS',
        descripcion: 'disparos y terrorismo',
        onclick: "destacar('#csgo-row', '#lethal-row', '#rocket-row', '#lol-row', '#outlast-row')",
        borrarOnClick: "borrar('#csgo-row')",
    },

    {
        id: 'rocket-row',
        codigo: '125',
        nombre: 'Rocket League',
        categoria: 'Deportes',
        descripcion: 'pinga pinga piga pinga',
        onclick: "destacar( '#rocket-row','#csgo-row', '#lethal-row', '#lol-row', '#outlast-row')",
        borrarOnClick: "borrar('#rocket-row')",
    },

    {
        id: 'lol-row',
        codigo: '126',
        nombre: 'League of Legends',
        categoria: 'MOBA',
        descripcion: 'pingajfksdg',
        onclick: "destacar( '#lol-row','#csgo-row', '#lethal-row', '#rocket-row', '#outlast-row')",
        borrarOnClick: "borrar('#lol-row')",
    },

    {
        id: 'outlast-row',
        codigo: '127',
        nombre: 'Outlast',
        categoria: 'Terror',
        descripcion: 'un gordo corriendote',
        onclick: "destacar( '#outlast-row', '#lol-row', '#csgo-row', '#lethal-row', '#rocket-row')",
        borrarOnClick: "borrar('#outlast-row')",
    },
];

let filaDatos = filas.map(fila =>{
    var tabla = document.querySelector('tbody');
    tabla.innerHTML += `
    <tr class="table-row" id="${fila.id}">
        <th scope="row">${fila.codigo}</th>
        <td>${fila.nombre}</td>
        <td>${fila.categoria}</td>
        <td class="descripcion-columna">${fila.descripcion}</td>
        <td class="text-center"><input class="checkbox" type="checkbox"></td>
        <td class="d-flex opciones-botones">
            <img src="/assets/images/trash-solid.svg" alt="Eliminar" id="eliminar" onclick="${fila.borrarOnClick}">
            <img src="/assets/images/pen-to-square-regular.svg" alt="Editar" id="editar" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="/assets/images/star-regular.svg" alt="Destacar" id="destacar" onclick ="${fila.onclick}">
        </td>
    </tr>
    `
});