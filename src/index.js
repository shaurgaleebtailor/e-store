import {createRoot} from "react-dom/client";
import App from './App.js';
import './index.scss';

let root = createRoot(document.getElementById("root"));
root.render(<App/>)