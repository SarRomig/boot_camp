const giphyKey = "smPw98ZB9h8F9SUdiyOEgLr7sznOCouT";
const form = document.querySelector('#memeSearch');

async function getGif(term) {
    try {
      const res = await axios.get("https://api.giphy.com/v1/gifs/search", { params: {api_key: giphyKey, q: term}});
    const results = res.data.length;
    if (results) {
        let index = Math.floor(Math.random() * results); //select random Gif
        const img = document.createElement("img");
        img.src = res.data[randomIdx].url;
    }
    console.log(res);
     return img; //returning undefined

    } catch (e) {
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
btn.addEventListener("click", function (e) {
  e.preventDefault();
  appendGif();
});

const removeBtn = document.querySelector("#removeBtn");

btn.addEventListener("click", function (e) {
    const gifLand = document.querySelector("#gifLand");
    gifLand.innerHTML = "";
  });
  