const url = `https://www.anapioficeandfire.com/api/books`
let root = document.querySelector('.content')

function handleSpinner(status=false){

}



function renderCharacters(charData){
    fetch(`${charData}`)
        .then((res)=>res.json())
        .then((val)=>{
            val.forEach((elm)=>{
                console.log(elm)
                
                let div = document.createElement('div')
                let p = document.createElement('p')
                p.innerText = elm.name
                div.append(p)
                root.append(div)
            })
            
        })
    
}



function renderBooks(data){
    data.forEach((book)=>{
         

        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let a = document.createElement('a')
        h2.innerText = book.name
        p.innerText = book.authors
        a.innerText = `Show Characters (${(book.characters.length)})`
        div.append(h2,p,a)
        root.append(div)
        renderCharacters(book.characters)
        // a.href = renderCharacters(book.characters)
        a.addEventListener('click',renderCharacters(book.characters))
    }) 
    
}




function init(url){
    handleSpinner(true)
    fetch(url)
        .then((res)=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error('Response not ok!')
            }
        })
        .then((books)=>{
            console.log(books)
            handleSpinner()
            renderBooks(books)
        })
}




if(navigator.onLine){
    init(url)
}else{
    handleErrorMessage(`Check your internet connection!`)
}




