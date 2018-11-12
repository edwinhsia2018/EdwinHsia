import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import Main from './pages/Main/Main'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => (
//     <Router>
//       <div>
//         <Main />
//       </div>
//     </Router>
//   );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
