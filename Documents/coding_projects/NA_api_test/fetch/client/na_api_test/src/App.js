// App.js
import React from 'react';
import ChartComponent from './Component/ChartComponent';
import MemberList from './Component/MemberList';

function App() {
  return (
    <div>
      <h1>찬성/반대/기권 데이터</h1>
      <ChartComponent />
      <MemberList />
    </div>
  );
}

export default App;
