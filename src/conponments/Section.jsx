import MyButton from "./MyButton";
import Wrapper from "./Wrapper";
function Section(props) {
  console.log(props);
  // const keywords = props.keywords.length ? props.keywords : [];
  return (
    <Wrapper>
      <section>
        {/*Change title to user to get const user = Mille from app*/}
        <h2>{props.title}</h2>
        <ul>{props.keywords}</ul>
        <p>{props.content}</p>
        <img src={props.img} alt="" />
        <MyButton>Haj</MyButton>
      </section>
    </Wrapper>
  );
}

export default Section;
