import propiedades from './venta.js';
let container = document.querySelector(".cards");
let card1 = "";


for (let propiedad of propiedades) {
    card1 += `

    <div class="col-md-4 mb-4 card">
              <img
                src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="titulo"> ${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion} </p>
                <p> <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banios} Baños </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class="${propiedad.smoke ? "text-success" : "text-danger"}"><i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
                ${propiedad.smoke ? "Está permitido fumar" : "No se permite fumar"}</p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
                ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
              </div>
            </div>
    `  
}
container.innerHTML = card1;