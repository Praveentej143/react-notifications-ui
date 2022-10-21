const Notification = (props) => {
  //  Write your code here.
  const { name, className, src } = props;
  return (
    <div className={`${className}`}>
      <img src={`${src}`} className="logo" />
      <p className="info-mesg">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Notifications</h1>
      <div className="notifictions-container">
        <Notification
          name="Information Message"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="not1"
        />
        <Notification
          name="Success Message"
          className="not2"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          name="Warning Message"
          className="not3"
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          name="Error Message"
          className="not4"
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
