function ImageList() {
  const SweetSweetList = [
    "../src/assets/react.svg",
    "../src/assets/testset.png",
  ];

  return (
    <>
      <ol>
        {SweetSweetList.map((item) => (
          <Images category={item} />
        ))}
      </ol>
    </>
  );
}

function Images(props) {
  return <img className="Images" src={props.category}></img>;
}

export default ImageList;
