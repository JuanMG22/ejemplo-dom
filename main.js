const productos = [
  {
    id: 1,
    nombre: "Campera",
    precio: 2000,
    imagen:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d6cfcab62ff4a2ca860abbc00f84811_9366/Campera_de_Presentacion_Boca_Juniors_Azul_GL7522_01_laydown.jpg",
  },
  {
    id: 2,
    nombre: "Remera",
    precio: 1500,
    imagen:
      "https://www.eldon.com.ar/media/catalog/product/cache/2318891599dd6b7da7fbbfb553d20c24/i/m/img_8817.png",
  },
  {
    id: 3,
    nombre: "Buzo",
    precio: 1800,
    imagen:
      "https://stylewatch.vtexassets.com/arquivos/ids/203313/buzo_litkillah_BUZOLITKI_3.jpg?v=637717403528030000",
  },
];

let cartas = document.getElementById("cartas");


productos.map(producto => {
    const carta = document.createElement("div")
    carta.className = "card col-md-2 container-fluid"

    carta.innerHTML = `
        <img class="card-img-top" src=${producto.imagen} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    `;

    cartas.append(carta)
})