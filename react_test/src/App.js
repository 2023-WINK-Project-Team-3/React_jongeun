import styled from 'styled-components';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<EmptyPage />} />
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
