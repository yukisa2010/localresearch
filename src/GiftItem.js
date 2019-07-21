import React from "react";

const GiftItem = props => (
  <div className="giftItem">
    <img src="../img/166415_3.jpg" alt="test" />
    <label><input type="radio" name="gift" value={props.flag} />牛丼</label>
  </div>
);

export default GiftItem;
