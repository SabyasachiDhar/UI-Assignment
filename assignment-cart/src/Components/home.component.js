import React, { Component, Fragment } from 'react';
import ItemListCard from './itemListCard.Component';
 
class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <Fragment>
        {/* <SortCard /> */}
        <ItemListCard dataList={this.state.items}/>
      </Fragment>
    );
  }
}

export default Home;