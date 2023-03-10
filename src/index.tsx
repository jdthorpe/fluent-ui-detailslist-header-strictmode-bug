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
    <p>Dragging to re-size the columns works when strict-mode is <em>not</em> applied</p>
    <App />
    <h1>Strict Mode Applied</h1>
    <p>Dragging to re-size the columns no longer works when using the react-dev server when strict-mode <em>is</em> applied</p>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <p>Note that CodePen uses babel to create a production build, so this bug is not reproducible on CodePen.</p>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
