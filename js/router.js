import Home, {HomeEvents} from "./views/Home.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import MoviesView, {MoviesEvents} from "./views/Movies.js";
import EditMovieView, {EditMovieEvents}  from "./views/EditMovie.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/EditMovie': {
            returnView: EditMovieView,
            state: {},
            uri: '/EditMovie',
            title: 'Add or Update Movies',
            viewEvent: EditMovieEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        // Need to test to see if movies is working
        '/movies': {
            returnView: MoviesView,
            state: {
                allMovies: {
                    url: "https://fluoridated-changeable-unicorn.glitch.me/movies",
                    headers: {
                        'Content-Type' : 'application/json',
                    }
                }
            },
            uri: '/movies',
            title: 'Movies',
            viewEvent: MoviesEvents
        },
    };

    return routes[URI];
}