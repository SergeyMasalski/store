import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';

import styles from './style.module.scss';
import { ROUTES } from './utils/routes';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import { User } from './models/types/User';
import { Basket,Layout,Registration,CardsList, Authorization, ProductPage} from './components';


function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div className={classNames(styles.root)}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<CardsList />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.BASKET} element={<Basket />} />
            <Route path={ROUTES.AUTHORIZATION} element={<Authorization />} />
            <Route path={ROUTES.AUTHORIZATION} element={<Authorization />} />
            <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
