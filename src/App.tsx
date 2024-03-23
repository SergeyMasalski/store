import classNames from 'classnames';
import Layout from './components/Layout/component';
import styles from './style.module.scss';

function App() {
  return (
    <div className={classNames(styles.root)}>
      <Layout>
        <Registration />
      </Layout>
    </div>
  );
}

export default App;
