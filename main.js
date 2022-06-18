// https://swapi.dev/api/people/?search=${query}

let id; // 'id' is created for debounce function

// Step-4
async function getData() {
    let query = document.getElementById('query').value;

    let url = `https://swapi.dev/api/people/?search=${query}`

    let res = await fetch(url)

    let data = await res.json()

    // console.log(data)

    return data.results
}

// Step-6
function append(data) {
    let container = document.getElementById('results');
    container.innerHTML = null

    data.forEach(function (el) {
        let p = document.createElement('p')
        p.innerText = el.name

        container.append(p)
    })
}


// Step-2
async function main() {
    // Step-3
    let data = await getData()
    // Step-5
    append(data)
}


// Step-1
function debouncing(func, delay) {

    if (id) {
        clearTimeout(id)
    }

    id = setTimeout(function () {
        func()
    }, delay)
}