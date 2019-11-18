$(document).ready(loadJSON());

function loadJSON() {

  $.getJSON("../json/productos.json", function (json) {
    if (json.clothes) {
      json.clothes.filter(f => f.gender == "male" || f.gender == "both").slice(0,6).forEach ( item => {
        $('#product').append('\
        <div class="col-lg-4 col-md-6 mb-4">\
          <div class="card h-100">\
            <a href="../product.html?id=' + item.id + '"><img class="card-img-top" src="/' + item.img + '" alt=""></a>\
            <div class="card-body">\
              <p class="card-title"><a href="../product.html?id=' + item.id + '" class="text-secondary h5">' + item.name + '</a></p>\
              <p class="h4">' + item.price + '</p>\
            </div>')
      });
    }
  });
}
