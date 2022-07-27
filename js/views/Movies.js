'use strict'

//TODO: We need to set up a 'card' that has the following

// Title
// Genre
// Rating
// Director

//Plot. But Plot is a STRETCH GOAL. Lets just worry about the first 4.

// To get all movies made, we'll for loop through and each movie object into a card, then print them all to the DOM
// Don't forget, each card needs a delete button attached to it!
export default function MoviesView(props) {
    // For loop through the response array, grab all the stuff I need with a fetch
   console.log(props.allMovies)

   let html = ''
   for (let i = 0; i < props.allMovies.length; i++) {
      html += `<div class="movie-card">`
      if(props.allMovies[i].title === undefined) {
         html += 'Title : N/A ';
      }
      else {html += `Title : ${props.allMovies[i].title}`}

      if(props.allMovies[i].genre === undefined) {
         html += '<div> Genre : N/A ';
      }
      else {html += `<div> Genre : ${props.allMovies[i].genre}`}

      if(props.allMovies[i].rating === undefined) {
         html += '<div> Rating : N/A ';
      }
      else {html += `<div>Rating : ${props.allMovies[i].rating}`}

      if(props.allMovies[i].director === undefined) {
         html += '<div>Director : N/A </div>';
      }
      else {html += `<div>Director : ${props.allMovies[i].director} </div>`}


      html += `</div> </div>`
      html += `<div className="">
         <button className="remove-hidden btn btn-outline-secondary">Delete a movie</button>
         <div className="deleteGroup">
            <select id="selectMenu2" className="hidden1 select">
               <option>Delete a movie</option>
            </select>
            <button id="delete-movie" className="hidden1 btn btn-danger">Delete movie</button>
         </div>
      </div>`
      html += `</div>`
   }

    // Need to fill this
   return `<div id="allMovies">
        ${html}
    </div>
`
}


//Each movie needs a delete button attached to it, that will target by ID.
// Set up an event onclick, to send out a DELETE request.
export function MoviesEvents() {

}
