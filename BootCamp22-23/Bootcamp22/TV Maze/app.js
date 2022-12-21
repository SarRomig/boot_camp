"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");
const missingImage = "https://tinyurl.com/tv-missing";

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const response = await axios.get("http://api.tvmaze.com/search/shows", {params: {q: term}})

  return response.data.map(result => { //map into array contatining information for show
    const show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : missingImage
    }
  })

}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $( //use button id later to add functionality
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img class="card-img-top" src="${show.image}">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes"> 
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) { 
  const epResponse = await axios.get("https://api.tvmaze.com/episodes/", {params: {q: id}}) //the base url is not drawing from the API, says CORS error

  return epResponse.data.map(result => { //map into array contatining information for episode
    const episode = result.episode;
    return {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      numer: episode.number
    }
  })

}

/** Write a clear docstring for this function... */

function populateEpisodes(episodes) { //episodes is an array, can loop over to create the list

  for(let episode of episodes) {
  const $li = $(`<li>${episode.name}, Season: ${episode.season}, Number: ${episode.number}</li>`);
  $episodesList.append($li);
  }
  $episodesArea.show();

}
//add an "episodes" button at bottom of each show card - from populateShows function, button class = btn btn-outline-light btn-sm Show-getEpisodes

async function getEpIdAndShow (e) {
  const id = $(e.target).closest(".Show").data("show-id"); //getting id to pass into episodes function then populating episodes in DOM with populateEpisodes function

  const episodes = await getEpisodesOfShow(id);
  populateEpisodes(episodes);
}

$showsList.on("click", ".Show-getEpisodes", getEpIdAndShow)