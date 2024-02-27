import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Layout from './components/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Trip App</title>
      </Helmet>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  );
}

export default App;
