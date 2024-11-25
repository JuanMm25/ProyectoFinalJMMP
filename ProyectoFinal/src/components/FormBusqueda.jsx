import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "./context/DataContext";

const FormBusqueda= () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('title: ', title);
        setQuery(title); 
    }

    return ( 
        <div className="formBusqueda">
            <h2>Buscador de peliculas</h2>
            
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Titulo de la pelicula" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Buscar" />
            </form>
            { error && <p className="error">Esta pelicula no existe </p> }
        </div>
    );
}
 
export default FormBusqueda;