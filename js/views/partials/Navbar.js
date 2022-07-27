
export default function Navbar(props) {

    // everyone can see home
    let html = `
        <nav className="navbar sticky-top navbar-light mb-0" style="background-color: #0a0a0a;">
            <h4 className="hyperlink"><i className="fas fa-film" style="color: aqua"></i>Zack Attack's Movie Review </h4>
            <a class="jalopy-nav hyperlink" href="/" data-link>Home</a>`;

    html = html + `<a class="jalopy-nav hyperlink" href="/EditMovie" data-link>Edit Movie</a>`;
    html += `<a class="jalopy-nav hyperlink" href="/movies" data-link>Movies</a>`;
    html += `</nav>`;
    return html;
}
