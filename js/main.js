document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    { img: "/img/diseño1.jpg" },
    { img: "/img/diseño2.jpg" },
    { img: "/img/diseño3.jpg" },
    { img: "/img/diseño4.jpg" },
    { img: "/img/diseño5.jpg" },
    { img: "/img/diseño6.jpg" },
    { img: "/img/diseño7.jpg" },
    { img: "/img/diseño8.jpg" },
    { img: "/img/diseño9.jpg" },
    { img: "/img/diseño10.jpg" },
    { img: "/img/diseño11.jpg" },
    { img: "/img/diseño12.jpg" },
    { img: "/img/diseño13.jpg" },
    { img: "/img/diseño14.jpg" },
    { img: "/img/diseño15.jpg" },
    { img: "/img/diseño16.jpg" },
    { img: "/img/diseño17.jpg" },
    { img: "/img/diseño18.jpg" },
    { img: "/img/diseño19.jpg" },
    { img: "/img/diseño20.jpg" },
    { img: "/img/diseño21.jpg" },
    { img: "/img/diseño22.jpg" },
    { img: "/img/diseño23.jpg" },
    { img: "/img/diseño24.jpg" },
    { img: "/img/diseño25.jpg" },
  ];
  let contador = 0;
  const contenedor = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagenes = document.querySelectorAll(".galeria img");
  const img_slideshow = document.querySelector(".slideshow img");

  contenedor.addEventListener("click", function (event) {
    let atras = contenedor.querySelector(".atras"),
      adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector("img"),
      tgt = event.target;

    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagenes[contador - 1].img;
        contador--;
      } else {
        img.src = imagenes[imagenes.length - 1].img;
        contador = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < imagenes.length - 1) {
        img.src = imagenes[contador + 1].img;
        contador++;
      } else {
        img.src = imagenes[0].img;
        contador = 0;
      }
    }
  });

  Array.from(galeria_imagenes).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar;
      img_slideshow.src = imagenes[imagen_seleccionada].img;
      contador = imagen_seleccionada;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });

  document.querySelector(".btn_cerrar").addEventListener("click", () => {
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
  });
});

let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 600 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);

window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");
  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = (pageScroll /height ) * 100;

  indicatorBar.style.width = scrollValue + "%";
});
