function init() {
    $('#ComprarEntrada').on('click', function () {
        ComprarEntrada();
    });
    $('#agregarPelicula').on('click', function () {
        AgregarPelicula();
    });
    $('#ShowSelect').on('click', function () {
        ShowSelect();
    });
    $('#eliminarPelicula').on('click', function () {
        EliminarPelicula();
    });

    listPelicula();


}
function EliminarPelicula() {
    // Crear un objeto FormData para enviar el formulario, incluyendo archivos
    var formData = new FormData($('#FormEliminarPelicula')[0]);

    // Enviar la solicitud AJAX al controlador
    $.ajax({
        url: 'index.php/eliminarPelicula',
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (datos) {
            if (datos == "Eliminación Exitosa") {
                Swal.fire({
                    title: datos,
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                    timer: 3000
                })
                $("#deletePelicula").modal('hide');
                listPelicula();
            } else {
                Swal.fire({
                    title: datos,
                    icon: 'error',
                    confirmButtonText: 'Entendido',
                    timer: 3000
                })
            }
        }
    });
}
function ShowSelect() {
    $.ajax({
        url: "index.php/showSelect",
        type: "POST",
        success: function (data) {

            var select = $('#SelectPelicula');
            select.empty();
            select.append($('<option>', {
                value: "null",
                text: "Seleccione una Opción"
            }));
            if (data == "No Data") {
            } else {
                var data = JSON.parse(data);
                // Recorrer los datos de las peliculas junto con su ID
                data.forEach(function (pelicula) {
                    select.append($('<option>', {
                        value: pelicula.idPelicula,
                        text: pelicula.nombrePelicula
                    }));
                });
            }
        }
    });
}
function listPelicula() {
    $.ajax({
        url: "index.php/listPeliculas",
        type: "POST",
        success: function (data) {
            // Encuentra el modelo por su ID
            var modelo = $('#ModeloTarjeta');
            // Oculta el modelo antes de comenzar el bucle
            modelo.hide();
            if (data == "No Data") {
                $('#EmptyPeliculas').text("Actualmente no existe ninguna película.");
            } else {
                $('#EmptyPeliculas').text("");
                var data = JSON.parse(data);
                // Vacía el contenedor antes de agregar nuevas tarjetas
                $('#contenedorDePeliculas').empty();

                // Agrega tarjetas dinámicamente
                data.forEach(function (pelicula) {
                    // Clona el modelo y oculta el clon antes de modificarlo
                    var nuevaTarjeta = modelo.clone().hide();

                    // Modifica los valores en el nuevo clon                    
                    nuevaTarjeta.find('#NombrePeliculaList').text(pelicula.nombrePelicula);
                    nuevaTarjeta.find('#ImagenPeliculaList').attr('src', pelicula.urlImagen);
                    nuevaTarjeta.find('#PrecioPeliculaList').text("Precio Unitario. $" + pelicula.PrecioPelicula + " MXN");
                    nuevaTarjeta.find('#btnComprar').attr('onclick', 'Datos("' + pelicula.nombrePelicula + '",' + pelicula.PrecioPelicula + ')');
                    // nuevaTarjeta.find('.card-text strong:eq(1)').text(pelicula[3]);                    

                    // Añade el nuevo clon al contenedor y muestra el clon
                    nuevaTarjeta.appendTo('#contenedorDePeliculas').show();
                });
            }
        }
    });
}
function AgregarPelicula() {
    // Crear un objeto FormData para enviar el formulario, incluyendo archivos
    var formData = new FormData($('#FormAgregarPelicula')[0]);

    // Enviar la solicitud AJAX al controlador
    $.ajax({
        url: 'index.php/agregarPelicula',
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (datos) {
            if (datos == "Película Agregada") {
                Swal.fire({
                    title: datos,
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                    timer: 3000
                })
                $("#createPelicula").modal('hide');
                listPelicula();
            } else {
                Swal.fire({
                    title: datos,
                    icon: 'error',
                    confirmButtonText: 'Entendido',
                    timer: 3000
                })
            }
        }
    });
}

function ComprarEntrada() {
    Swal.fire({
        title: "Tu Compra fue Exitosa",
        icon: 'success',
        confirmButtonText: 'Entendido',
        timer: 3000
    })
    $('#exampleModal').modal('hide');
}
function Datos(nombre, precio) {
    $('#ValNombre').text(nombre);
    $('#ValCosto').text(precio);
    CalcularTotal();
}
function CalcularTotal() {
    var costo = $('#ValCosto').text();
    var cant = $('#CantidadPersonas').val();
    $('#ValTotal').text(costo * cant);


}
init();