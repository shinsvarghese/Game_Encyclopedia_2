import React, { Component } from "react";

export default ({ data, filterText }) => {
  //const {data,filterText}=this.props;
  const namesList = data
    .filter(name => {
      return name.Name.indexOf(filterText) >= 0;
    })
    .map(name => {
      return (
        <li key={name.Rank} className={name.Genre}>
          <h1 style={({ color: "red" }, { fontSize: 30 })}> {name.Name}</h1>
          <p1>
            Name : {name.Name} <br />
            Rank: {name.Rank}
            <br />
            Genre : {name.Genre} <br />
            Year :{name.Year}
            <br />
            Global Sales :{name.Global_Sales}
            <br />
            Publisher :{name.Publisher}
            <br />
            <br />
          </p1>

          <t />
          <t />
        </li>
      );
    });
  // console.log(namesList)
  return (
    <div>
      <ul>{namesList}</ul>
    </div>
  );
};
