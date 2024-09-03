// Public API key for Marvel API
const pub_api = "";
// Private API key for Marvel API
const priv_api = "";

// Generate a timestamp in seconds
const timeStamp = Math.floor(Date.now() / 1000);
// Create a hash string for API request authentication
const hashString = CryptoJS.MD5(`${timeStamp}${priv_api}${pub_api}`).toString(CryptoJS.enc.Hex);
// Construct the API URL with the timestamp, public key, and hash
const api_url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${pub_api}&hash=${hashString}`;

/**
 * Fetch Marvel API data asynchronously.
 * @returns {Promise<Array>} A promise that resolves to an array of character objects.
 */
async function fetchMarvelApi() {
    try {
        // Make an API request to the Marvel API
        const response = await fetch(api_url);
        // Parse the JSON response
        const data = await response.json();

        // Check if the response is successful
        if (data.code === 200) {
            // Return the list of characters
            return data.data.results;
        } else {
            // Log an error if the response status is not OK
            console.error("Error fetching data:", data.status);
        }
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error("Error Fetching Marvel Data", error);
    }
}

/**
 * Fetch characters from the Marvel API and update the user interface.
 */
function getInfo() {
    // Call the fetchMarvelApi function and handle the promise
    fetchMarvelApi().then((characters) => {
        if (characters) {
            // Get the main container element to display the characters
            const mainContainer = document.getElementById("main-container");
            // Clear any existing content in the main container
            mainContainer.innerHTML = "";

            // Iterate over each character and create HTML content
            characters.forEach((character) => {
                const characterElement = `
                    <div>
                        <h2>${character.name}</h2>
                        <p>ID: ${character.id}</p>
                        <p>${character.description || "No Description Available"}</p>
                    </div>`;
                // Append the character HTML to the main container
                mainContainer.innerHTML += characterElement;
            });
        }
    });
}
