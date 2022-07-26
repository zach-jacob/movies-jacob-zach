
export default function Navbar(props) {

    // everyone can see home
    let html = `
        <nav>
            <a class="jalopy-nav" href="/" data-link>Home</a>`;
    // everyone can see about
    html = html + `<a class="jalopy-nav" href="/about" data-link>About</a>`;
    html += `<a class="jalopy-nav" href="/movies" data-link>Movies</a>`;
    html += `</nav>`;
    return html;
}