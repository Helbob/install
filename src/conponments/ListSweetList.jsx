import React from "react";

function ListsSweetLists() {
  const data = ["IPA", "Stout", "APA", "NEIPA"];

  const beerList = data.map((item) => <Beer category={item} />);

  return <ol>{beerList}</ol>;
}

function Beer(props) {
  return <li className="beer">{props.category}</li>;
}

export default ListsSweetLists;
