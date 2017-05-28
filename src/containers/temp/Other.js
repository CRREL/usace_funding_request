import app from 'ampersand-app';
import React from 'react';
import { Link } from 'react-router-dom';

class Other extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: app.testStore.getItems()
    }
  }

  componentDidMount(){
    this.itemsUnlistener = app.testStore.listen(this.getItemsFromStore);
  }

  componentWillUnmount(){
    this.itemsUnlistener();
  }

  getItemsFromStore = () => {
    this.setState({
      items: app.testStore.getItems()
    })
  }

  render(){
    const match = this.props.match;
    const variable = match.params.variable;
    const items = this.state.items;
    return (
      <div className="container">
        <Link to="/">Back Home</Link>
        <br/>
        <h2>{variable}</h2>
        <ul>
          {
            items.map( (item, i) => {
              return <li key={i}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Other;