import propiedades from './venta.js'
import propiedades_alquiler from './alquiler.js'
const alquileres = document.querySelector("#alquiler_cards")
const container = document.querySelector("#venta_cards")
let cards = "";
let c_alquiler = "";

for (let index = 0; index < 3; index++) {
    cards += `

    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedades[index].src}" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
      <h5 class="card-title">
          ${propiedades[index].nombre}
        </h5>
        <p class="card-text"> ${propiedades[index].descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedades[index].ubicacion}</p>
        <p> <i class="fas fa-bed"></i> ${propiedades[index].habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedades[index].banios} Baños </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedades[index].costo}</p>
        <p class="${propiedades[index].smoke ? "text-success" : "text-danger"}"><i class="fas ${propiedades[index].smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
        ${propiedades[index].smoke ? "Está permitido fumar" : "No se permite fumar"}</p>
        <p class="${propiedades[index].pets ? "text-success" : "text-danger"}">
        <i class="fas ${propiedades[index].pets ? "fa-paw" : "fa-ban"}"></i>
        ${propiedades[index].pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
      </div>
    </div>
  </div>
    `
}

for (let index = 0; index < 3; index++) {
  c_alquiler += `

  <div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedades_alquiler[index].src} "class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
      <h5 class="card-title">${propiedades_alquiler[index].nombre}</h5>
      <p class="card-text">${propiedades_alquiler[index].descripcion}</p>
      <p><i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[index].ubicacion}</p>
      <p><i class="fas fa-bed"></i> ${propiedades_alquiler[index].habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedades_alquiler[index].banios} Baños </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[index].costo}</p>
      <p class="${propiedades_alquiler[index].smoke ? "text-success" : "text-danger"}"><i class="fas ${propiedades_alquiler[index].smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
      ${propiedades_alquiler[index].smoke ? "Está permitido fumar" : "No se permite fumar"}</p>
      <p class="${propiedades_alquiler[index].pets ? "text-success" : "text-danger"}">
      <i class="fas ${propiedades_alquiler[index].pets ? "fa-paw" : "fa-ban"}"></i>
      ${propiedades_alquiler[index].pets ? "Mascotas permitidas" : "No se permiten mascotas"}
      </p>
    </div>
  </div>
</div>
  `
}
container.innerHTML = cards;
alquileres.innerHTML = c_alquiler