import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Sidebar from './container/Sidebar';
import Tulbar from './container/Tulbar';

import TicketsPage from './pages/TicketsPage';
import OverviewPage from './pages/OverviewPage';
import IdeasPage from "./pages/IdeasPage";

import './assets/styles/main.scss';

function App() {

  return (
    <Router>
      <div className="app">
          <Sidebar />
            <div className="content">
              <Tulbar/>
              <Switch>
                <Route path="/" exact component={OverviewPage}/>
                <Route path="/tickets" exact component={TicketsPage}/>
                <Route path="/ideas" exact component={IdeasPage}/>
              </Switch>
            </div>
      </div>
    </Router>
  );
}

export default App;
