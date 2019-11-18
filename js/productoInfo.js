$(document).ready(loadJSON());

function loadJSON(path = "json/productos.json") {

  let urlParams = new URLSearchParams(window.location.search);
  let allSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  $.getJSON(path, function (json) {
      if (urlParams.has('id')) {
        json.clothes.forEach(item => {
            if (item.id == urlParams.get('id')) {

              $('#productName').append('\
                  <h1 class="text-center">' + item.name + '</h1>')

              $('#productImg').append('\
                  <img src=' + item.img + ' alt="foto_producto" class="d-block mx-auto custom-photo">')

              $('#productDescrip').append('\
                  <p class="mb-5 text-justify p-2 bg-light rounded border pb-0 border-dark"">' + item.description + '</p>')

              for (let i = 0; i < 6; i++) {
                if (item.sizes.includes(allSizes[i])) {
                  $('#productSize').append('\
                      <button class="boton btn col-4 col-lg-3" type="button" >' + allSizes[i] + '</button>')
                } else {
                  $('#productSize').append('\
                      <button class="boton-disable btn col-4 col-lg-3 noButton" type="button" disabled>' + allSizes[i] + '</button>')
                }
              }

              $('#productCart').append('\
                  <div class="d-flex justify-content-center my-3 flex-wrap">\
                    <div class="col-6 my-auto">\
                      <h3 class="text-secondary">Unidades:</h3>\
                    </div>\
                    <div class="col-6 my-auto">\
                      <h3 class="text-secondary">Precio/Unidad:</h3>\
                    </div>\
                    <div class="col-6">\
                      <input class="text-center" type="number" data-quantity-input="" value="1" min="1" max="99" aria-label="Unidades">\
                    </div>\
                    <div class="col-6 my-auto">\
                      <h4 class="text-dark">' + item.price + '</h4>\
                    </div>')
              item.opinion.forEach(item2 => {
                $('#productValoration').append('\
                <p class="text-justify h3">' + item2.title + '</p>\
                <p class="text-justify">' + item2.comment + '</p>\
                <p class="text-justify text-secondary">Escrito por: ' + item2.user + '</p>\
                <hr>')
              })
            }
          });
        }
      });
  }