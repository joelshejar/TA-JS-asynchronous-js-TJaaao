const input = document.querySelector('input')
const img  = document.querySelector('img')
const name = document.querySelector('h3')
const workingAt = document.querySelector('p')
const following = document.querySelector('.following')
const followers = document.querySelector('.followers')

function displayUI(data){
            img.src = data.avatar_url
            name.innerText = data.name
            
}
function displayFollowers(data){
    let ul = document.querySelector('.followers')
    ul.innerHTML = ''
    for(let i=0;i<5;i++){

        let img1 = document.createElement('img')
        let li1 = document.createElement('li')
        li1.append(img1)
        img1.src = data[i].avatar_url
        ul.append(li1)
    }
}
function displayFollowing(data){
    let ul = document.querySelector('.following')
    ul.innerHTML = ''
    for(let i=0;i<5;i++){

        let img1 = document.createElement('img')
        let li1 = document.createElement('li')
        li1.append(img1)
        img1.src = data[i].avatar_url
        ul.append(li1)
    }
}

function handleChange(event){
    if(event.keyCode === 13){
        let xhr = new XMLHttpRequest()
        let random = new XMLHttpRequest()
        random.open('GET', `https://api.github.com/users/${event.target.value}/followers`)
        let following = new XMLHttpRequest()
        following.open('GET', `https://api.github.com/users/${event.target.value}/following`)
        xhr.open('GET', `https://api.github.com/users/${event.target.value}`)
        xhr.onload = function(){
            let userData = JSON.parse(xhr.response)
            displayUI(userData)
            event.target.value = ''
        }
        random.onload = function(){
            let followersData = JSON.parse(random.response)
            console.log(followersData)
            displayFollowers(followersData)
            
        }
        following.onload = function(){
            let followingData = JSON.parse(following.response)
            
            displayFollowing(followingData)
            
        }
        following.send()
        random.send()
        xhr.onloadstart = function(){
            console.log('Data Loading Started')
        }
        xhr.onloadend = function(){
            console.log('Data Loading Ended')
        }
        xhr.onloadprogress = function(){
            console.log('Data Loading ...')
        }
        xhr.onerror = function(){
            console.log('Something Went Wrong')
        }
        xhr.send()
    }
}


input.addEventListener('keyup', handleChange)









