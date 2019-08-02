import dva from 'dva';
import './index.css';

const aa=require("history").createBrowserHistory

// 1. Initialize
const app = dva(aa);



// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/shoping').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
