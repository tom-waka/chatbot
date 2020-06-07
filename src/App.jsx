import React from 'react';
import defaultDataset from './dataset';


export default class App extends React.Component {
constructor(porps) {
  super(porps);
  this.state = {
    answers: [],
    chats: [],
    currentId: "init",
    dataset: defaultDataset,
    open: false,
  }
}

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          
        </div>
      </section>
    );
  }
}

// export default App;
