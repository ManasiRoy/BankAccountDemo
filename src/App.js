import React from 'react';
import './App.css'
import DatatablePage from './DataTable'
import MyCompo from './Piechart'
function App() {
  return (
    <div className="container">
      <DatatablePage />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <MyCompo />
        </div>
      </div>

    </div>
  );
}

export default App;
