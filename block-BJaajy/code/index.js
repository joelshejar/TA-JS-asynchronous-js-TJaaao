let times = [1,2,3,4]
let timesPromises = times.map((seconds)=>{
    new Promise((res)=>{
        setTimeout(()=>{
            res(Math.random())
        },seconds*1000)
    })
})

let users = ['samsangeeth','shadab-me','ikushaldave','josephv7','beingfranklin']
let usersPromises = users.map((user)=>{
    fetch(`https://api.github.com/users/${user}`).then((res)=>res.json())
})
Promise.all(usersPromises).then((users)=>{
    users.forEach((user)=>{
        console.log(user.followers)
    })
})









