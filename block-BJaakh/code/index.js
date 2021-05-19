let baseURL = 'https://github.com/AltCampus/basic-todo-api'

fetch(baseURL)
    .then((res) => res.json())
    .then(console.log)

fetch(url, {
    metho: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})










