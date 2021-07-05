import React, { useState } from 'react';
import data from './data';
import List from './List';


// start App Component 
function App() {

  // component state
  const [people,setPeople] = useState(data); 


  // return component
  return (<main>
    <section className="container">
      <h3>{people.length} birthday today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>

  </main>);
}
// end App Component 

export default App;
