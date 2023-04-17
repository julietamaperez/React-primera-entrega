const products = [ 
    {nombre: "Castañas de Cajú", precio: 500, id:1, img: "./img/castañas.jpg"},
    {nombre: "Dulce de leche - vegano", precio: 700, id:2, img: "./img/dulce-de-leche-felices-lasvacas.png"},
    {nombre: "Nugget de pollo", precio: 620, id:3, img: "./img/nuggets-pollo-feliceslasvacas.jpg"},
    {nombre: "Yogurt Quimya", precio: 250, id:4, img: "./img/quimya.jpg"},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout ( () => {
            const producto = productos.find( prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}