$(document).ready(loadJSON());

function loadJSON() {

  $.getJSON("../json/productos.json", function (json) {
    if (json.carousel) {
      for (let i=0; i<3; i++) {
        if (i == 0) {
          $('#carousel').append('\
          <div class="carousel-item active">\
            <img class="d-block img-fluid" src="' + json.carousel[i].img + '">\
          </div>')
        } else {
          $('#carousel').append('\
          <div class="carousel-item">\
            <img class="d-block img-fluid" src="' + json.carousel[i].img + '">\
          </div>')
        }
      }
    }
    if (json.clothes) {
      json.clothes.filter(f => f.new == true).slice(0,8).forEach ( item => {
        $('#newProducts').append('\
        <div class="col-lg-3 col-md-6 mb-4">\
            <div class="card h-100">\
              <a href="product.html?id=' + item.id + '"><img class="card-img-top" src="' + item.img + '" alt=""></a>\
              <div class="card-body">\
                <p class="card-title"><a href="../product.html?id=' + item.id + '" class="text-secondary h5">' + item.name + '</a></p>\
                <p class="h4">' + item.price + '</p>\
              </div>\
            </div>\
          </div>\
        ')
      });
    }
  });
}