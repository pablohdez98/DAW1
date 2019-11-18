$(document).ready(loadJSON());

function loadJSON() {

  $.getJSON("../json/productos.json", function (json) {
    if (json.clothes) {
      json.clothes.filter(f => (f.gender == "male" || f.gender == "both") && f.trending == true).slice(0,5).forEach ( item => {
        $('#trendProduct').append('\
        <div class="col-lg-3 col-md-6 mb-4">\
          <div class="card h-100">\
            <a href="../product.html?id=' + item.id + '"><img class="card-img-top" src="' + item.img + '" alt=""></a>\
            <div class="card-body">\
              <h4 class="card-title"><a href="../product.html?id=' + item.id + '">' + item.name + '</a></h4>\
              <h5>' + item.price + '</h5>\
            </div>')
      });
    }
  });
}