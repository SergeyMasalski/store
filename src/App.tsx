import classNames from 'classnames';
import Layout from './components/Layout/component';
import styles from './style.module.scss';

import Registration from './components/Registration/component';
import CardsList from './components/CardsList/component';

function App() {
  return (
    <div className={classNames(styles.root)}>
      <Layout>
        {/* <Registration /> */}

        <CardsList />
      </Layout>
    </div>
  );
}

export default App;
