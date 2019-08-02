import React from 'react';
import { Router} from 'dva/router';


// import Main from "./views/main/index";

// import Home from "./views/main/home/index"

// import List from "./views/main/list/index"
import RouteView from "./routes/RouteView"
import RouteConfig from "./routes/RouteConfig"
function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <RouteView children={RouteConfig}></RouteView>
      {/* <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/main/home" exact component={Home} />
        <Route path="/main/list" exact component={List} />
        <Redirect from="/" to="/main"></Redirect>
      </Switch> */}
    </Router>
  );
}

export default RouterConfig;
