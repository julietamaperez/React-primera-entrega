import {getUnProducto} from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState (null);
    
    useEffect (() =>{
        getUnProducto(1)
        .then(res => setProductos (res))
    }, [])
  
    return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )

}

export default ItemDetailContainer