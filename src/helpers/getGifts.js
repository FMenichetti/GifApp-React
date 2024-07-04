



export const getGift = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=yuVWWj60BU5f50rduE5jFxFLEEi1NRpc&q=${category}&limit=6`
    const resp = await fetch(url);
    const { data } = await resp.json();

    

    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifts)
    // console.log(data)
    return gifts;
}