import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/component';
import { Registration } from './components/Registration/component';
import CardsList from './components/CardsList/component';

import styles from './style.module.scss';
import { ROUTES } from './utils/routes';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import { User } from './models/types/User';
import { Authorization } from './components/Authorization/component';

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div className={classNames(styles.root)}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<CardsList />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.AUTHORIZATION} element={<Authorization />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
