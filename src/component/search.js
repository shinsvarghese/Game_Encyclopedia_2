import React, { Component } from "react";

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val);
    //console.log(val)
  }
  render() {
    return (
      <form>
        <label style={({ color: "blue" }, { fontSize: 20 })}> Game : </label>
        <input
          type="text"
          ref={value => (this.myValue = value)}
          placeholder="Type in the  game name "
          onChange={this.filterUpdate.bind(this)}
        />
        <br />
        <br />
      </form>
    );
  }
}
export default Search;
