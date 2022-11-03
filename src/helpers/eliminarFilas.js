export default function eliminarFilas(filas) {
    for (let i = 1; i < filas.length; i++) {
        filas[i].remove()
    }
}