// this is my data
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
        },
        {"name": "James Madison",
        "fact": "James Madison was five feet and four inches tall.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/2/20/James_Madison%28cropped%29%28c%29.jpg"
        },
        {"name": "James Monroe",
        "fact": "During the Revolutionary War, James Monroe was shot by a bullet and carried it in his shoulder for the rest of his life.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d4/James_Monroe_White_House_portrait_1819.jpg"
        },
        {"name": "John Quincy Adams",
        "fact": "John Quincy Adams went swimming naked! Someone stole his clothes and he had to ask a boy to get him some clothes.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/JQA_Photo.tif/lossy-page1-1024px-JQA_Photo.tif.jpg"
        },
        {"name": "Andrew Jackson",
        "fact": "For Andrew Jackson’s inauguration party twenty-thousand people stormed into the White House to greet him. Things got way out of control so Andrew snuck out of the White House and went to a hotel. Tubs of punch were put out for everyone to have a drink. Once everyone was out the White House staff locked the doors and windows so nobody could come in.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/6/64/Andrew_Jackson.jpg"
        },
        {"name": "Martin Van Buren",
        "fact": "Martin Van Buren was from Old Kinderhook, New York and his nickname was Old Kinderhook.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/1/17/MVanBuren.png"
        },
        {"name": "William Henry Harrison",
        "fact": "William Henry Harrison died of pneumonia a month after he was elected.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c5/William_Henry_Harrison_daguerreotype_edit.jpg"
        },
        {"name": "John tyler",
        "fact": "John Tyler had the most children than any other president. He had fifteen children.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/55/Tyler_Daguerreotype_%28restoration%29.jpg"
        },
        {"name": "James K. Polk",
        "fact": "James K. Polk added 1.2 million square feet to the United States of America.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f8/James_Polk_restored.jpg"
        },
        {"name": "Zachary Taylor",
        "fact": "Zachary Taylor's death is one of the strangest deaths. There are theories that a snack he ate was poisoned. Other people say he was assassinated.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/51/Zachary_Taylor_restored_and_cropped.jpg"
        },
        {"name": "Millard Fillmore",
        "fact": "When Millard Fillmore heard the Library of Congress was on fire he ran down to help put out the fire.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Millard_Fillmore.jpg"
        },
    
        {"name": "Franklin Pierce",
        "fact": "Franklin Pierce has no middle name.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/4/46/Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg"
        },
        {"name": "James Buchanan",
        "fact": "One of James Buchanan's goals was to buy Cuba from Spain",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/f/fd/James_Buchanan.jpg"
        },
        {"name": "Abraham Lincoln",
        "fact": "Abraham Lincoln used to store his bankbook, mail, and important papers in his stove-pipe hat.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg"
        },
        {"name": "Andrew Johnson",
        "fact": "Andrew Johnson sewed most of his clothes.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg"
        },
        {"name": "Ulysses S. Grant",
        "fact": "Ulysses S. Grant got a speeding ticket while “driving” a horse and carriage. The police officer took away his horse and carriage. ",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ulysses_S._Grant_1870-1880.jpg"
        },
        {"name": "Rutherford Hayes",
        "fact": "Rutherford Hayes was the first president to have a telephone installed in the White House. His phone number was 1.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/50/President_Rutherford_Hayes_1870_-_1880_Restored.jpg"
        },
        {"name": "Chester A. Arthur",
        "fact": "Chester A. Arthur was nicknamed Elegant Arthur because he liked nice clothes.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/7/79/Chester_Alan_Arthur.jpg"
        },
        {"name": "James A. Garfield",
        "fact": "James A. Garfield was shot by a man named Charles J. Guiteau because James thought people shouldn’t get appointed to important posts in the government just because they knew the president. ",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg"
        },
        {"name": "Benjamin Harrison",
        "fact": "Benjamin Harrison was so formal that the White House staff secretly called him “The Human Iceberg”.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pach_Brothers_-_Benjamin_Harrison.jpg"
        },
        {"name": "Grover Cleveland",
        "fact": "Grover Cleveland is the only U.S.A. president to get married while in office.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg"
        },
        {"name": "William McKinley",
        "fact": "William McKinley was the first president to ride in the automobile. He didn’t think it was fun. He got the ride of an ambulance after he was shot.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mckinley.jpg"
        },
        {"name": "Theodore Roosevelt",
        "fact": "Theodore Roosevelt went on a bear hunt, but there was one problem-there were no bears. His guide found a bear and tied to a tree. He would not shoot the bear. A store owner heard about it and created a stuffed animal now known as the teddy bear.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Roosevelt_-_Pach_Bros.jpg"
        },
        {"name": "William Taft",
        "fact": "William Taft was the largest president. He was so huge that he had to have a tub that could fit four regular size men.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/b/be/William_Howard_Taft_cph.3b35813.jpg"
        },
        {"name": "Warren G. Harding",
        "fact": "Warren G. Harding had the biggest feet of any president. Size fourteen.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg"
        },
        {"name": "Calvin Coolidge",
        "fact": "Calvin Coolidge was so silent he was nicknamed Silent Cal. One time a dinner guest betted she could make Calvin say more than three words. He replied “You lose”.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/3/37/Calvin_Coolidge%2C_bw_head_and_shoulders_photo_portrait_seated%2C_1919.jpg"
        },
        {"name": "Herbert Hoover",
        "fact": "Herbert Hoover didn't want to accept his salary for president, but donated it to charity.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/57/President_Hoover_portrait.jpg"
        },
        {"name": "Franklin D. Roosevelt",
        "fact": "Franklin D. Roosevelt had triskaidekaphobia (a phobia that makes a person that has it be scared of the number thirteen) so when there were thirteen people at dinner he would invite his secretary. He would never leave for a trip on the thirteenth day of the month too.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg"
        },
        {"name": "Harry S. Truman",
        "fact": "The S in Harry S. Truman's name doesn't stand for anything.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/52/Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945-crop.jpg"
        },
        {"name": "Dwight D. Eisenhower",
        "fact": "At the end of Dwight D. Eisenhower’s presidency people chanted “Ike is nifty, Ike is nifty; started out with forty-eight and ended with forty-eight.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg"
        },
        {"name": "John F. Kennedy",
        "fact": "John F. Kennedy was credited in starting the Peace Corps.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5e/John_F._Kennedy%2C_White_House_photo_portrait%2C_looking_up.jpg"
        },
        {"name": "Lyndon B. Johnson",
        "fact": "Lyndon B. Johnson and his wife, Lady Bird Johnson named their children Lynda Bird Johnson and Luci Baines Johnson because they wanted all four members have the initials LBJ.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c3/37_Lyndon_Johnson_3x4.jpg"
        },
        {"name": "Richard Nixon",
        "fact": "Richard Nixon loved bowling so much he had builders install a bowling alley in the White House.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/3/39/Richard_M._Nixon%2C_ca._1935_-_1982_-_NARA_-_530679.jpg"
        },
        {"name": "Gerald Ford",
        "fact": "Gerald Ford was the Collegiate All-Star 48 football jersey was retired at the University of Michigan.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/3/30/Gerald_Ford_crop.jpg"
        },
        {"name": "Jimmy Carter",
        "fact": "Jimmy Carter grew up on a peanut farm in Georgia and sold boiled peanuts on the side of the road.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5a/JimmyCarterPortrait2.jpg"
        },
        {"name": "Ronald Reagan",
        "fact": "Ronald Reagan was a popular movie actor and he raised up a chimpanzee as if it were a real human baby.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg"
        },
        {"name": "George H.W. Bush",
        "fact": "George H.W. Bush was sick at one of the prime minister of Japan, Kiichi Miyawa, that he threw up on the prime minister's lap! He became the only president in history to throw up on a foreign dignitary. Afterwords, the Japanese used the term bushu-suru for throwing up which means to do the Bush way.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/e/ee/George_H._W._Bush_crop.jpg"
        },
        {"name": "Bill Clinton",
        "fact": "When Bill Clinton was a teenager he shook hands with president John F. Kennedy.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg"
        },
        {"name": "George W. Bush",
        "fact": "George W. Bush was nearly assassinated when a man threw a grenade at him, but it didn't explode.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg"
        },
        {"name": "Barack Obama",
        "fact": "Barack Obama collects Spider-man and Conan the Barbarian comics.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
        },
        {"name": "Donald Trump",
        "fact": "Donald Trump loves fast food from McDonalds.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
     
        }
        
    ]
}
let bg = document.getElementById('body')
let header = document.getElementById('header')

// when my screen load hide all presidents
const load = () => {
    hideAll()
    header.style = 'background-image: none;'
    bg.style = 'background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0.1)),url("seal.png");background-repeat: no-repeat;background-position: center;height: 100vh;'
      
}
window.onload = load;

let newCard = document.getElementById('new-card')
let seeAllButton = document.getElementById('see-all')
let seeRandomButton = document.getElementById('see-random')
let showButton = document.getElementById('show')

changeBackground = () => {
    let bg = document.getElementById('body')
    bg.style = 'background: aqua;'
}

changeH1Color = () => {
    let h1 = document.getElementById('customh1')
    h1.style = 'color: black; text-align: center; padding: 1.5rem;'
}


hideAll = () => {
    newCard.innerHTML = ''
}

// click on see all button to display all presidents
seeAllButton.addEventListener('click', (e) => {
    hideAll()
    console.log('fire see all')
    loadFacts()
})

// click on random button to randomly pick a president and display it
seeRandomButton.addEventListener('click', (e) => {
    hideAll()
    changeBackground()
    changeH1Color()
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

// when the show button is clicked get the first and last name
// that was in the input box and see if that is in my data
// if so display it on the screen if not than dont
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

// get my data object and loop through it and dynamicly create a card for each one
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