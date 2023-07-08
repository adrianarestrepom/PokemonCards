// const url = 'https://pokeapi.co/api/v2/pokemon';

// const character = fetch(`${url}character`)
//     .then(res => res.json())
//     .then(data => {
//         data.results.forEach(character => {
//             console.log(character.name)
//         });
//     })

// const   fetchApi = async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);       
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchApi(url);

// const url = 'https://rickandmortyapi.com/api/character';
// const parentElement = document.getElementById('container');

// const   fetchApi = async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         data.results.forEach(element => {
//             const newElement = document.createElement('p');
//             const img = document.createElement('img');
//             newElement.textContent = `nombre : ${element.name}`
//             img.src = element.image;
//             parentElement.appendChild(img);
//             parentElement.appendChild(newElement);
//         });
//     }   
//     catch (error) {
//         const errorMsg = document.createElement('p');
//         errorMsg.textContent = `nombre : ${error.message}`
//         parentElement.appendChild(errorMsg);
//     }
// }
// fetchApi(url)

const url = 'https://pokeapi.co/api/v2/pokemon';
const parentDiv = document.getElementById('container');

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.results.forEach(element => {
            const divCard = document.createElement('div');
            divCard.className = "Cards";
            const divName = document.createElement('div');
            divName.className = "Name";
            const pName = document.createElement('p');

            const iHeart = document.createElement('i');
            iHeart.className = "fa-sharp fa-regular fa-heart";
            const img = document.createElement('img');
            img.className = "Card";
            const divFooter = document.createElement('div');
            divFooter.className = "Name";
            const pPower = document.createElement('p');
            const btn = document.createElement('button');
            btn.textContent = "Buy";
            btn.className = "Botontarjeta";
            
            pName.textContent = element.name.charAt(0).toUpperCase()+ element.name.slice(1).toLowerCase();

            getByUrl(element.url).then(res => { 
                img.src = res.sprites.other["home"].front_default;
                pPower.textContent = `Power level: ${res.base_experience}`;
                divName.appendChild(pName);
                divName.appendChild(iHeart);
                divCard.appendChild(divName);
                divCard.appendChild(img);
                divFooter.appendChild(pPower);
                divFooter.appendChild(btn);
                divCard.appendChild(divFooter);
                parentDiv.appendChild(divCard);
            });
        });
    }   
    catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `nombre : ${error.message}`
        parentDiv.appendChild(errorMsg);
    }
}

const getByUrl = async (url2) => {
    const res = await fetch(url2);
    const data = await res.json();
    return data;
}

fetchApi(url)