


$("#submit-btn").on("click", function () {
    $(".inputs").submit();
    const $titleInput = $("#title").val();
    const $ratingInput = $("#rating").val();
    $("<li class = 'new-title'></p>").text($titleInput).appendTo($(".append-the-movies"));
    $("<li></li>").text("Rating" + " " + $ratingInput).appendTo($(".new-title"));
    $(".new-title").append('<button class = "removal"> Remove Movie </button>');
    //$(".inputs").trigger("reset"); -- form reset?
    $(".append-the-movies").on("click", ".removal", function (){
        //there's got to be a better way to remove... right now removing whole list not just one li at a time
        const $removedTitle = $(".removal").parent();
        $removedTitle.remove();
        $removedTitle.children().remove();
    })
    //add button to initiate sort
$("<button class = 'sort'> Sort Movies </button>").appendTo("div");
const mylist = $('.append-the-movies');
const listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
    Array.from($(".new-title"))
   return a.textContent.localeCompare(b.textContent)
   
})

})

