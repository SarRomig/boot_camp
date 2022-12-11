


$(".form-data").on("submit", function (evt) {
    evt.preventDefault();
    const $titleInput = $("#title").val();
    const $ratingInput = $("#rating").val();
    $("<p class = 'new-title'></p>").text("Title: " + $titleInput + " Rating: " + $ratingInput + " ").appendTo($(".movie-list"));
    $(".new-title").append('<button class = "removal"> Remove Movie </button>');
    $(".form-data").trigger("reset");
    $(".movie-list").on("click", ".removal", function (evt){
        removeMovie(evt.target);
    })
})

function removeMovie (target) {
    $(target).closest("p").remove();
}


//add button to initiate sort
//add new titles to an array in order to sort (or an object since there are ratings, too)

// function(a, b) {
//     Array.from($(".new-title"))
//    return a.textContent.localeCompare(b.textContent) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
//     }