import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/component';
import Registration from './components/Registration/component';
import CardsList from './components/CardsList/component';

import styles from './style.module.scss';
import { ROUTES } from './utils/routes';

function App() {
  return (
    <div className={classNames(styles.root)}>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<CardsList />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
