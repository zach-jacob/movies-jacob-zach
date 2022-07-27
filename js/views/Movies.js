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
      html += props.allMovies[i].title
      html +=`<div> ${props.allMovies[i].genre}`
      html += `<div> ${props.allMovies[i].rating}`
      html += `<div> ${props.allMovies[i].director} </div>`
      html += `</div> </div> </div>`
   }

let allMovies = document.getElementById('allMovies')
allMovies.innerHTML = html;

    // Need to fill this
   return `<div id="allMovies">
    </div>
`
}


//Each movie needs a delete button attached to it, that will target by ID.
// Set up an event onclick, to send out a DELETE request.
export function MoviesEvents() {

}
