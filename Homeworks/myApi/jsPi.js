let ClientId ="kLSsSs5qDWNnFveJW_QZcHamVzfrBKFtiRaB_oYhmQ8" //my access Key
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${ClientId}` /// URL to fetch /// /photos/random/ it's to get random photo

// data what i ean to get
let imageElement = document.querySelector("#unsplashimage")
let imageLink = document.querySelector("#imageLink")
let creator = document.querySelector("#creator")

fetch(endpoint)
// to get a data from database of wesite to json file
.then((response) => response.json())
   // console.log(response.json());
//to get data from json file
.then( (jsonData) => {
    console.log(jsonData);
    //import image to html 
    imageElement.src = jsonData.urls.small;
    imageLink.setAttribute("href", jsonData.links.html);
    creator.innerText = jsonData.user.name;
    creator.setAttribute("href",jsonData.user.portfolio_url);
})
//error if it's happen
.catch((Error) => {
    console.log("Error:" + Error);
})

/*function download(){
    axios({
        url:'https://source.unsplash.com/random/500x500',
        method:'GET',
        responseType:'bolb'
    })
    .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = link
        
        link.setAttribute('download','file.jpg')
        document.body.appendChild(link)
        
        link.click()
    })
}*/

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
