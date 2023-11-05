import './App.css';

function App() {
  const pagename = 'Hi,Wink Team 3';
  const wink = {
    name: 'Wink(Web In Kookmin)',
    url: 'https://wink.kookmin.ac.kr/',
  };
  return (
    <div className="App">
      <h1
        style={{
          color: '#00498c',
          // 컬러:코발트블루
          backgroundColor: '#c3dde1',
        }}
      >
        {pagename}
      </h1>

      <a href={wink.url}>{wink.name}</a>
    </div>
  );
}

export default App;
