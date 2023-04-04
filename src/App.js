import './App.css';
import React from 'react';

function App() {
  const [listItems, setListItems] = React.useState(['Laundry']);
  // this is basically equivalent to this....
  /*
  const useState = () => {
    //logic goes here

    return [yourVariable, setYourVariable];
  }
  */

  return (
    <div>
      <ul>
        {
          // I can do JS here
          listItems.map((item, index) => {
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>
      {/* events must be camel cased */}
      <input 
        onChange={(event) => {
            setListItems([event.target.value])
            console.log(event.target.value)
          }
        }
      />
    </div>
  );
}

export default App;