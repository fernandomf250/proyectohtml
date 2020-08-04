$("#botplato1").click(function () {
  var img = $("#plato1img").attr("src"); /*saco la img*/
  var nombre = $("#plato1nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato1precio").attr("class");

  alert("Se agrego al carrito");
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato2").click(function () {
  var img = $("#plato2img").attr("src"); /*saco la img*/
  var nombre = $("#plato2nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato2precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato3").click(function () {
  var img = $("#plato3img").attr("src"); /*saco la img*/
  var nombre = $("#plato3nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato3precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato4").click(function () {
  var img = $("#plato4img").attr("src"); /*saco la img*/
  var nombre = $("#plato4nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato4precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato5").click(function () {
  var img = $("#plato5img").attr("src"); /*saco la img*/
  var nombre = $("#plato5nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato5precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato6").click(function () {
  var img = $("#plato6img").attr("src"); /*saco la img*/
  var nombre = $("#plato6nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato6precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato7").click(function () {
  var img = $("#plato7img").attr("src"); /*saco la img*/
  var nombre = $("#plato7nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato7precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});

$("#botplato8").click(function () {
  var img = $("#plato8img").attr("src"); /*saco la img*/
  var nombre = $("#plato8nombre").attr("class"); /*saco el atributo id*/
  var precio = $("#plato8precio").attr("class");

  alert(img, nombre, precio);
  AgregarCarrito(img, nombre, precio); /*envio*/
});



function AgregarCarrito(img, nombre, precio) {
  var dbCitas = localStorage.getItem("carrito"); //Obtener datos de localStorage
  dbCitas = JSON.parse(dbCitas); // Covertir a objeto
  if (dbCitas === null)
    // Si no existe, creamos un array vacio.
    dbCitas = []; // es es un  array

  // Seleccionamos los datos de los inputs de formulario
  var datos = JSON.stringify({
    img: img,
    nombre: nombre,
    precio: precio,
  });

  dbCitas.push(datos); // Guardar datos en el array definido globalmente
  localStorage.setItem("carrito", JSON.stringify(dbCitas)); 

  location.reload(); //Correcion del bug de eliminar productos del carrito con la actualizacin de pag al agregar mas prodcutos
}


function listarCitas() {
    var dbCitas = localStorage.getItem("carrito"); //Obtener datos de localStorage
    dbCitas = JSON.parse(dbCitas); // Covertir a objeto
    for (var i in dbCitas) {
        var d = JSON.parse(dbCitas[i]);
        $("#listar").append(
            "<img src="+d.img+"> </img>"+
            "<tr>" +

            "<td>" + i + "</td>" +
            "<td>" + d.nombre + "</td>" +
            "<td>" + d.precio + "</td>" +

            
            "<td> <a id='" + i + "' class='btnEliminar' href='#'> Eliminar </a> </td>" +
            "</tr>"+
             "</tbody>"+
            "</table>"
        );
    }


}
listarCitas();

function listarcompra() {
    
    var dbCitas = localStorage.getItem("carrito"); //Obtener datos de localStorage
    dbCitas = JSON.parse(dbCitas); // Covertir a objeto

    $("#listacompra").html(
        "<table>"+
        "<thead>" +
        "<tr>" +

        "<th> Imagen </th>" +
        "<th> Nombre </th>" +   
        "<th> Precio </th>" +

      
        "<th> Acciones </th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>"
       

    );

    for (var i in dbCitas) {
        var d = JSON.parse(dbCitas[i]);
        $("#listacompra").append(
            
            
            "<tr>" +

            "<td>" + i + "</td>" +
            "<img src="+d.img+"> </img>"+
            "<td>" + d.nombre + "</td>" +
            "<td>" + d.precio + "</td>" +

            
            "<td> <a id='" + i + "' class='btnEliminar' href='#'> Eliminar </a> </td>" +
            "</tr>"+
             "</tbody>"+
            "</table>"
        );
    }
}

listarcompra();

function Eliminar(e){
  dbCitas.splice(e, 1); // Args (posición en el array, numero de items a eliminar) https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
  localStorage.setItem("dbCitas", JSON.stringify(dbCitas));
  return Mensaje(2);
}


$(".btnEliminar").bind("click", function(){
  alert("¿ Me quieres eliminar ?");
  indice_selecionado = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
  console.log(indice_selecionado);
  console.log(this);
  Eliminar(indice_selecionado); // Eliminamos el elemento llamando la funcion de eliminar
  listarCitas();
});