'use strict'

// Need to add a form to update movies
export default function EditMovieView(props) {
    // A get request by Title.
    //EDIT
   return `<form>
        <div class="rightSide d-flex row">
    <div class="">
        <button id="showEdit" class="btn btn-outline-secondary">Edit</button>
        <select  id="selectMenu" class="hidden1 select"></select>
        <div class="hidden1 editMovie" id="editMovie">
            <label for="newTitle">Change Title </label>
            <input type="text" id="newTitle">
            <br>
            <label for="newGenre">Change Genre </label>
            <input type="text" id="newGenre">
            <br>
            <label for="newRating">Change Rating </label>
            <input type="text" id="newRating">
            <br>
            <label for="newDirector">Change Director </label>
            <input type="text" id="newDirector">
            <br>
            <div class="textBox">
                <label for="newPlot">Change plot </label>
                <textarea id="newPlot" rows="3" cols="30"></textarea>
            </div>        </div>
        <br>
        <button id="changeMovie" class="btn btn-outline-secondary">Update Movie</button>

    </div>
</div>
    </form>

<div class="">
    <button id="post-id" class="btn btn-outline-secondary">Post Movie</button>
    <div class="hidden1 editMovie" id="postMovie">
        <label for="title">Title </label>
        <input type="text" id="title">
        <br>
        <label for="genre">Genre </label>
        <input type="text" id="genre">
        <br>
        <label for="rating">Rating </label>
        <input type="text" id="rating">
        <br>
        <label for="director">Director </label>
        <input type="text" id="director">
        <br>
        <div class="textBox">
            <label for="plot">Plot </label>
            <textarea id="plot" rows="5" cols="40"></textarea>
        </div>

        <br>
        <button id="newMovie" class="btn button-outline-secondary">Add Movie</button>
    </div>
</div>
</div>
`
    //Return a form with the info pre-populated

    // After they edit the form with whatever changes they want, submit changes.

    //Show success message for they're update.
}

//TODO: Update event on submit of form. Also, fetch by Title to return 1 movie.
export function EditMovieEvents() {

}