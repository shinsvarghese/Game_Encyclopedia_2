import React, { Component } from "react";
//import data_list from '../data/data_file.json'
import Search from "./component/search";

import NameList from "./component/game_list";

class x extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
  }
  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  render() {
    return (
      <header>
        {" "}
        <b> THE ENCYCLOPEDIA OF GAMES </b>
        <br />
        <br />
        <div>
          <Search
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />

          <main>
            <NameList
              data={this.props.data}
              filterText={this.state.filterText}
            />
          </main>
        </div>
      </header>
    );
  }
}
export default x;
