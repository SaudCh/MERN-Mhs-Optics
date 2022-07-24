import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import 'react-popper/dist/index.umd.js'
import AppRoute from './Routes/index';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}

export default App;
