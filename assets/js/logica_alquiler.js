import propiedades_alquiler from './alquiler.js'
let card_alquiler = document.querySelector("#card_alquiler");
let alqui = "";


for (let alquileres of propiedades_alquiler) {
    alqui += `

    <div class="col-md-4 mb-5 card">
              <img
                src="${alquileres.src}" class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="titulo"> ${alquileres.nombre}</h5>
                <p class="card-text">${alquileres.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${alquileres.ubicacion} </p>
                <p> <i class="fas fa-bed"></i> ${alquileres.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${alquileres.banios} Baños </p>
                <p><i class="fas fa-dollar-sign"></i>${alquileres.costo}</p>
                <p class="${alquileres.smoke ? "text-success" : "text-danger"}"><i class="fas ${alquileres.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
                ${alquileres.smoke ? "Está permitido fumar" : "No se permite fumar"}</p>
                <p class="${alquileres.pets ? "text-success" : "text-danger"}">
                <i class="fas ${alquileres.pets ? "fa-paw" : "fa-ban"}"></i>
                ${alquileres.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
              </div>
            </div>
    `  
}
card_alquiler.innerHTML = alqui;