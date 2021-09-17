import AddEmployer from './components/AddEmployer';
import Header from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import viewEmployees from './components/viewEmployees';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={viewEmployees} />
        <Route path="/add" exact component={AddEmployer} />
      </div>
    </Router>
  );
}

export default App;
