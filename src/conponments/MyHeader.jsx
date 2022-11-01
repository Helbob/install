import MyButton from "./MyButton";
function MyHeader() {
  return (
    <header>
      <nav>
        <a href="#">Byont</a>
        <ul>
          <li>
            <a href="#">Who we are</a>
          </li>
          <li>
            <a href="#">The problems</a>
          </li>
          <li>
            <a href="#">Our services</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
        <MyButton>Hi</MyButton>
      </nav>
    </header>
  );
}

export default MyHeader;
