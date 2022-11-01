import { useState } from "react";

function ListsSweetLists() {
  const [beerList, setBeerList] = useState(["IPA", "Stout", "APA", "NEIPA"]);

  function addOne() {
    setBeerList(beerList.concat("Russian Stout"));
  }
  return (
    <>
      <ol>
        {beerList.map((item) => (
          <Beer category={item} />
        ))}
      </ol>
      <button onClick={addOne}>Add one</button>
    </>
  );
}

function Beer(props) {
  return <li className="beer">{props.category}</li>;
}

export default ListsSweetLists;
