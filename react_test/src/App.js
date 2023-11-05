import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  const pagename = 'Hi,Wink Team 3';
  const wink = {
    name: 'Wink(Web In Kookmin)',
    url: 'https://wink.kookmin.ac.kr/',
  };
  return (
    <div className="App">
      <Welcome />
      <h1
        style={{
          color: '#00498c',
          // 컬러:코발트블루
          backgroundColor: '#c3dde1',
          borderRight: '12px solid #000',
          marginBottom: '100px',
          opacity: 0.5,
        }}
      >
        {pagename}
      </h1>
      <Hello />
      <div className={styles.box}>app js</div>

      <a href={wink.url}>{wink.name}</a>

      <h3>props: Properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
