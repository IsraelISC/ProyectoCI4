function init() {
    $('#ComprarEntrada').on('click', function () {
        ComprarEntrada();
    });
    $('#agregarPelicula').on('click', function () {
        AgregarPelicula();
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
            if (datos == "Actualización Exitosa") {
                Swal.fire({
                    title: datos,
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                    timer: 3000
                })
                $("#modalEditar").modal('hide');
                //ActualizarTabla(); // Llamar a la función para actualizar la tabla
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