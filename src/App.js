import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Layout from './components/Layout';
import AppRoutes from './routes';
import Logo from 'src/assets/Images/app_icon.png';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Trip App</title>
        <link rel="icon" type="image/png" href={Logo} />
      </Helmet>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  );
}

export default App;
