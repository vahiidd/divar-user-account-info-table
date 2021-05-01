import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <div>
      <Header setFilteredData={setFilteredData} />
      <Table filteredData={filteredData} />
    </div>
  );
};
export default App;
