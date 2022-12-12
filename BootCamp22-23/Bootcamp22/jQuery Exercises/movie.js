
const movieObj = {};

$(".form-data").on("submit", function (evt) {
    evt.preventDefault();
    const $titleInput = $("#title").val();
    movieObj.title = $titleInput; //will replace every time...
    const $ratingInput = $("#rating").val();
    movieObj.rating = $ratingInput;
    $("<p class = 'new-title'></p>").text("Title: " + $titleInput + " Rating: " + $ratingInput + " ").append('<button class = "removal"> Remove Movie </button>').appendTo($(".movie-list"));
    $(".form-data").trigger("reset");
    $(".movie-list").on("click", ".removal", function (evt){
        removeMovie(evt.target);
    })
})

function removeMovie (target) {
    $(target).closest("p").remove();
}


//add button to initiate sort
//sort movieObj on page then reset display of movieObj 




// function(a, b) {
//     Array.from($(".new-title"))
//    return a.textContent.localeCompare(b.textContent) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
//     }