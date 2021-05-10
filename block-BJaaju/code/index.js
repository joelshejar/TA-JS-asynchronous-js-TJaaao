let input = document.querySelector('input')


function createUI(data){
        
        let photos = data.results.slice(0,10)
        
        photos.forEach((elm)=>{
            let div = document.querySelector('.images')
            let img = document.createElement('img')
            img.src = elm.urls.small
            div.append(img)
        })
        
    
    
}


function handleSearch (event){
    if(event.keyCode === 13){
        (event.target.value)
        xhr = new XMLHttpRequest()
        xhr.open('GET', `https://api.unsplash.com/search/photos?client_id=upkPuk0bSo9v6dUNxsk20sZ2vflEmIRRBRzdDyE8hso&page=1&query=${event.target.value}`)
        xhr.onload = function(){
            let imgData = JSON.parse(xhr.response)
            (imgData)
            createUI(imgData)
        }
        xhr.send()
        
    }

}



input.addEventListener('keydown', handleSearch)




















