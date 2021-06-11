import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { ProblemaDos } from './pages/ProblemaDos';
import { ProblemaTres } from './pages/ProblemaTres';
import { ProblemaUno } from './pages/ProblemaUno';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/problema1" component={ProblemaUno} />
        <Route exact path="/problema2" component={ProblemaDos} />
        <Route exact path="/problema3" component={ProblemaTres} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;