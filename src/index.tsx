import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import { DetailsList } from '@fluentui/react/lib/DetailsList';

function App() {
  const columns = [
    {
      key: "column1",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Value",
      fieldName: "value",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];
  const items = [
    { key: 1, name: "good", value: 1 },
    { key: 2, name: "bad", value: 2 },
  ];
  return (
    <div className="App">
      <DetailsList items={items} columns={columns} setKey="set" />
    </div>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>

    <h1>No Strict Mode</h1>
    <App />
    <h1>Strict Mode Applied</h1>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
