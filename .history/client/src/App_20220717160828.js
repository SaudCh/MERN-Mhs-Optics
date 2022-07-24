import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { Link } from 'react-router-dom';

function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">Navbar</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">Link</Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">Disabled</Link>
            </li>
          </ul>
          <div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
