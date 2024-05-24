import axios from 'axios'

export const getMangasRequest = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/v1/mangas');
        return response.data;
    } catch (error) {
        // Manejar errores en caso de que la llamada falle
        console.error('Error al llamar a la API:', error);
        throw error; // Re-lanzar el error para que el llamador pueda manejarlo
    }
};

export const createMangaRequest = async (manga) =>{
    try {
        const response = await axios.post('http://localhost:3001/api/v1/mangas',manga)
        return response;
    } catch (error) {
        // Manejar errores en caso de que la llamada falle
        console.error('Error al llamar a la API:', error);
        throw error; // Re-lanzar el error para que el llamador pueda manejarlo
    }
}

export const getRandonMangasRequest = async () =>{
    try {
        const response = await axios.get('http://localhost:3001/api/v1/randonMangas');
        return response.data;
    } catch (error) {
        // Manejar errores en caso de que la llamada falle
        console.error('Error al llamar a la API:', error);
        throw error; // Re-lanzar el error para que el llamador pueda manejarlo
    }
}