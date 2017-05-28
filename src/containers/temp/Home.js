import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            I'm a sidebar
          </div>
          <div className="col-md-9">
            I'm in the main panel
            <br/>
            <Link to="/otherpage/items">Item Page</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;