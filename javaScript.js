const data = { 
    "us_presidents":
    [
        {"name": "George Washington",
        "fact": "George Washington had only one real tooth. His other teeth were other people and animal’s teeth.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
        },
        {"name": "John Adams",
        "fact": "John Adams’ last words were “Thomas Jefferson lives”, but he was mistaken. Thomas Jefferson died on the same day five hours earlier.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/7/70/John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg"
        },
        {"name": "Thomas Jefferson",
        "fact": "Thomas Jefferson was given two grizzly bears from Zebulon Pike that lived in a cage on the lawn of the White House.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg"
        }
        
    ]
}

const load = () => {
    hideAll()
}
window.onload = load;

let newCard = document.getElementById('new-card')
let seeAllButton = document.getElementById('see-all')
let seeRandomButton = document.getElementById('see-random')
let showButton = document.getElementById('show')


hideAll = () => {
    newCard.innerHTML = ''
}

seeAllButton.addEventListener('click', (e) => {
    hideAll()
    console.log('fire see all')
    loadFacts()
})

seeRandomButton.addEventListener('click', (e) => {
    hideAll()
    let num = Math.floor(Math.random() * data.us_presidents.length); 
    
    newCard.className = ''

    let divAuto = document.createElement('div')
    newCard.appendChild(divAuto).className = 'col-auto'

    let divCard = document.createElement('div')
    divCard.style = 'width: 21rem;'
    divAuto.appendChild(divCard).className = 'card mx-auto d-block'

    let imgTag = document.createElement('img')
    imgTag.src = data.us_presidents[num].photo
    divCard.appendChild(imgTag).className = 'card-img-top'

    let divCardBody = document.createElement('div')
    divCard.appendChild(divCardBody).className = 'card-body'

    let h5Tag = document.createElement('h5')
    h5Tag.innerHTML = data.us_presidents[num].name
    divCardBody.appendChild(h5Tag).className = 'card-title'

    let pTag = document.createElement('p')
    pTag.innerHTML = data.us_presidents[num].fact
    divCardBody.appendChild(pTag).className = 'card-text'
    
})

showButton.addEventListener('click', (e) => {
    
    hideAll()

    newCard.className = ''

    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    console.log(fname, lname)
    let president = `${fname} ${lname}`
    console.log(president)
    for ( let i = 0; i < data.us_presidents.length; i++ ) {
        // console.log(data.us_presidents[i].name)
        if ( president == data.us_presidents[i].name) {
            console.log('president found')
                
        let divAuto = document.createElement('div')
        newCard.appendChild(divAuto).className = 'col-12'
    
        let divCard = document.createElement('div')
        divCard.style = 'width: 21rem;'
        divAuto.appendChild(divCard).className = 'card mx-auto d-block'
    
        let imgTag = document.createElement('img')
        imgTag.src = data.us_presidents[i].photo
        divCard.appendChild(imgTag).className = 'card-img-top'
    
        let divCardBody = document.createElement('div')
        divCard.appendChild(divCardBody).className = 'card-body'
    
        let h5Tag = document.createElement('h5')
        h5Tag.innerHTML = data.us_presidents[i].name
        divCardBody.appendChild(h5Tag).className = 'card-title'
    
        let pTag = document.createElement('p')
        pTag.innerHTML = data.us_presidents[i].fact
        divCardBody.appendChild(pTag).className = 'card-text'
        } else {
            console.log('no match found')
        }
    }
    document.getElementById('fname').value = ''
    document.getElementById('lname').value = ''
    
})


loadFacts = () => {
    console.log('fire loadfacts')
    for( let i = 0; i < data.us_presidents.length; i++ ) {
        console.log('fire forloop')
        let newCard = document.getElementById('new-card')
        newCard.className = 'row'
        let divAuto = document.createElement('div')
        newCard.appendChild(divAuto).className = 'col-auto'
    
        let divCard = document.createElement('div')
        divCard.style = 'width: 21rem;'
        divAuto.appendChild(divCard).className = 'card'
    
        let imgTag = document.createElement('img')
        imgTag.src = data.us_presidents[i].photo
        divCard.appendChild(imgTag).className = 'card-img-top'
    
        let divCardBody = document.createElement('div')
        divCard.appendChild(divCardBody).className = 'card-body'
    
        let h5Tag = document.createElement('h5')
        h5Tag.innerHTML = data.us_presidents[i].name
        divCardBody.appendChild(h5Tag).className = 'card-title'
    
        let pTag = document.createElement('p')
        pTag.innerHTML = data.us_presidents[i].fact
        divCardBody.appendChild(pTag).className = 'card-text'
    }
}
