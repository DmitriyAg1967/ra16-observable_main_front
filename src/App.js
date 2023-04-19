import './App.css';
import List from "./components/List";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/ra16-observable_main_front/" element={<List />} />
          <Route path="/ra16-observable_main_front/:id/details" element={<Details />} />
          <Route path="/" element={<Navigate replace to="/ra16-observable_main_front" element={<List />}  />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;