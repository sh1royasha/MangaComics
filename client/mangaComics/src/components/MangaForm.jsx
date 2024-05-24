import Input from "./Input"
import inputs from '../js/main'
import { useState } from "react"
import { createMangaRequest } from "../api/mangas.api"
import Spinner from "./Spinner"

const MangaForm = () =>{
    const [formData,setFormData] = useState({
        codigo:'',
        titulo:'',
        autor:'',
        genero:'',
        editorial:'',
        publicacion:'',
        precio:'',
        stock:'',
        imagen:null,
    });

    const [loading,setLoading] = useState(false);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(formData)
        setLoading(true);
        try {
            const response = await createMangaRequest(formData);
            console.log(response)
            if(response.data.success){
                handleReset();
            }
        } catch (error) {
            console.error("Error al enviar datos a la API: ",error)
        } finally {
            setLoading(false)
        }
    };

    const handleReset = ()=>{
        setFormData({
            codigo:'',
            titulo:'',
            autor:'',
            genero:'',
            editorial:'',
            publicacion:'',
            precio:'',
            stock:'',
            imagen:null,
          });
    }

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }));
    };

    const handleFile = (event) =>{
        const file = event.target.files[0];

        if(file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.onload = () =>{
                setFormData( prevState => ({
                    ...prevState,
                    imagen: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }else{
            alert('Seleccione un archivo foto')
        }
    };
    
    return(
        <>
            {loading && <Spinner/>}
            {loading && <div className="overlay"></div>}
            <form className="manga-registration-form"  onSubmit={handleSubmit} encType="multipart/form-data">
            <h2 className="form-title">Manga Registration</h2>
            <div className="form-container">
                {inputs.map((input,i)=>(
                    <Input
                        key={i}
                        nombre={input.nombre}
                        tipo={input.tipo}
                        onChange={handleChange}
                        value={formData[input.nombre]}
                    />
                ))}
                <div className="form-group">
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input type="file" name="imagen" className="form-input" id='imagen' onChange={handleFile}/>
                </div>
                <input type="submit" value="Enviar" className="form-submit"  />
            </div>
            </form>
        </>
    )
}

export default MangaForm