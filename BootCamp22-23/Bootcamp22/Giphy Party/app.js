const giphyKey = "smPw98ZB9h8F9SUdiyOEgLr7sznOCouT";
const form = document.querySelector('#memeSearch');

async function getGif(term) {
    try {
      const res = await axios.get("https://api.giphy.com/v1/gifs/search", { params: {api_key: giphyKey, q: term}});
    const resultsLength = res.data.length;
       // let index = Math.floor(Math.random() * resultsLength); //select random url index
        const img = document.createElement("img");
        img.src = res.data[0]; //trying with a hard coded index to start
    
    console.log(res);
     return img; //returning undefined

    }
     catch (e) {
      alert("No gifs found!");
    }
  }


async function appendGif() {
    const input = document.querySelector('#searchTerm');
    const gifLand = document.querySelector("#gifLand");
    const gifImg = await getGif(input);
    gifLand.append(gifImg);
    input.value = '';
}

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", async function (e) {
  e.preventDefault();
    await appendGif();
});

const removeBtn = document.querySelector("#removeBtn");

removeBtn.addEventListener("click", function (e) {
    const gifLand = document.querySelector("#gifLand");
    gifLand.innerHTML = "";
  });
  