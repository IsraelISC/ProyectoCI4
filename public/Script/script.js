function init() {
    $('#ComprarEntrada').on('click', function () {
        ComprarEntrada();
    })

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