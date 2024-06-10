import { useState } from "react";
import NavBar from "../NavBar";
import "./index.css";

const Account = () => {
  const [showSubscription, setShowSubscription] = useState(true);

  const cancelSubscription = () => {
    setShowSubscription(!showSubscription);
  };

  return (
    <div className="navbar-account-container">
      <NavBar />
      <div className="account-container">
        <h1 className="account-heading">Account Settings</h1>
        <div className="account-details-container">
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1718000737/sjvdqlpm2endud0qcc9b.png"
            alt="user"
            className="account-image"
          />
          <div className="account-input-container">
            <label className="account-label">User Name</label>
            <input
              type="text"
              className="account-input"
              placeholder="alphauser"
            />
          </div>
          <div className="account-input-container">
            <label className="account-label">Email Name</label>
            <input
              type="email"
              className="account-input"
              placeholder="alphauser@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className="account-subscription-container">
        <h1 className="account-heading">Subscription</h1>
        {showSubscription && (
          <div className="account-subscription">
            <p className="account-subscription-description">
              You are currently on the{" "}
              <span className="account-subscription-hint">
                Ques AI Basic Plan!
              </span>
            </p>
            <button type="button" className="account-subscription-upgrade">
              Upgrade
            </button>
          </div>
        )}
        <div
          className={`${
            showSubscription
              ? "account-subscription-cancel-container"
              : "account-subscription-show-container"
          }`}
        >
          <button
            type="button"
            className={`${
              showSubscription
                ? "account-subscription-cancel"
                : "account-subscription-show"
            }`}
            onClick={cancelSubscription}
          >
            {showSubscription ? "Cancel Subscription" : "Show Subscription"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
