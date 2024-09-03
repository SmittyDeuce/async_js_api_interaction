const pub_api = "";
const priv_api = "";

const timeStamp = Math.floor(Date.now() / 1000);
const hashString = CryptoJS.MD5(`${timeStamp}${priv_api}${pub_api}`).toString(CryptoJS.enc.Hex);
const api_url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${pub_api}&hash=${hashString}`;

async function fetchMarvelApi() {
    try {
        const response = await fetch(api_url);
        const data = await response.json();

        if (data.code === 200) {
            return data.data.results;
        } else {
            console.error("Error fetching data:", data.status);
        }
    } catch (error) {
        console.error("Error Fetching Marvel Data", error);
    }
}

function getInfo() {
    fetchMarvelApi().then((characters) => {
        if (characters) {
            const mainContainer = document.getElementById("main-container");
            mainContainer.innerHTML = "";

            characters.forEach((character) => {
                const characterElement = `
                    <div>
                        <h2>${character.name}</h2>
                        <p>ID: ${character.id}</p>
                        <p>${character.description || "No Description Available"}</p>
                    </div>`;
                mainContainer.innerHTML += characterElement;
            });
        }
    });
}
