import "../CSS/Bottom.css";

const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="Bottom1">
        <div className="explore">
          <ul>
            <p>Explore</p>
            <li><a href="/">Home</a></li>
            <li><a href="/">Questions</a></li>
            <li><a href="/">Articles</a></li>
            <li><a href="/">Tutorials</a></li>
          </ul>
        </div>
        <div className="Explore Support">
          <ul>
            <p>Support</p>
            <li><a href="/">Faq's</a></li>
            <li><a href="/">Help</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="Explore support1">
          <p>Stay Connected</p>
          <ul>
            <li><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" style={{ width: '10%' }} alt="Insta" /></li>
            <li><img src="https://logodix.com/logo/1058183.png" style={{ width: '10%' }} alt="Facebook" /></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" style={{ width: '10%' }} alt="Twitter" /></li>
          </ul>
        </div>
      </div>
      <div className="dev">
        <p> Dev@Deakin 2023 </p>
        <div className="dev2">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
