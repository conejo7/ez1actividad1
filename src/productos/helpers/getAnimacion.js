export const getAnimacion = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KvBXfifIRcb6d8H71R8LHnCEGLwytAEh&q=carne&limit=1`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const animacion = data.map( elem => ({
        id: elem.id,
        title: elem.title,
        url: elem.images.downsized_medium.url
    }));

   // console.log(gifs)
        return animacion;
}