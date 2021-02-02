// Variables

// DOM References
let postContainer = document.querySelector('#post-container')
console.log(postContainer)

// functions
fetch('https://cat-fact.herokuapp.com/facts')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let catFacts = json;
        for (let i = 0; i < catFacts.length; i++) {
            let text = catFacts[i].text;
            let divEl = createPost(text);
            postContainer.appendChild(divEl);
            divEl.classList.add('class1')
        } 
    })

function createPost(text) {
    let divEl = document.createElement('div');
    let h3El = document.createElement('h3');
    h3El.textContent = text;
    divEl.appendChild(h3El);

    return divEl;
}

console.log(createPost)