
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import Project from '../src/Components/Project/Project'
import Contact from '../src/Components/Contact/Contact'
import Header from '../src/Components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
