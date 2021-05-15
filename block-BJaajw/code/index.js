let select = document.querySelector('select')



let data = fetch(`https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30`)
.then((res)=>{
    if(!res.ok){
        throw new Error(`Error happened : ${res.status}`)
    }
    res.json()
})
.catch((error)=>{
    console.log(error)
})


let companies = data.then((val)=>{
    console.log(val)
    let arr = []
    val.forEach((elm)=>{
        arr.push(elm.newsSite)
        createUI(elm)
    })
    let allCompanies = arr.reduce((acc,cv)=>{
        if(!acc.includes(cv)){
            acc.push(cv)
            
        }
        return acc
    },[])
    allCompanies.forEach((elm) =>{
        let option = document.createElement('option')
        option.innerText = elm
        option.value = elm
        select.append(option)
    })
    return allCompanies
})





function createUI(e){
    let root = document.querySelector('.main')
    let imgDiv = document.createElement('div')
    let img = document.createElement('img')
    img.src = e.imageUrl
    img.alt = 'image'
    imgDiv.append(img)
    let contentDiv = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerText = e.newsSite
    let p = document.createElement('p')
    p.innerText = e.title
    let a = document.createElement('a')
    a.innerText = 'Read More'
    a.href = e.url
    contentDiv.append(h3,p,a)
    root.append(imgDiv,contentDiv)
}
function handleChange(e){
    console.log(e)
    data.then((val)=>{
        val.forEach((elm)=>{
            if(elm.newsSite==e){
                console.log(elm)
                createUI(elm)
            }
        })
    })
}
select.onchange = handleChange()

select.addEventListener('change', handleChange)




