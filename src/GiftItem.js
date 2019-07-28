import React from "react";

const GiftItem = props => (
  <div className="giftItem">
    <img src={props.url} alt="test" />
    <label style={{ color: props.labelcolor }}><input type="radio" name="gift" value={props.flag} />{props.flag}</label>
  </div>
);

export default GiftItem;
