// no se deben colocar la ejecucion de una funcion en un funtional component
// cada vez que se renderiza el funtional component se vuelve a ejecutar la funcion 
// si esta esta dentro del funtional componetn
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QBXrYA58h9zgWevtunOkv8k3s3cnJrmh&q=${ category }&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;
}