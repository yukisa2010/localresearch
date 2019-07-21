import React from "react";
import GiftItem from "./GiftItem";



const TableComponent = () => {

  const itemName = [
    '牛丼1',
    '牛丼2',
    '牛丼3',
    '牛丼4',
    '牛丼5',
    '牛丼6'
  ]

  return (
  <div className='giftItems'>
    <GiftItem flag={itemName[0]}/>
    <GiftItem flag={itemName[1]}/>
    <GiftItem flag={itemName[2]}/>
    <GiftItem flag={itemName[3]}/>
    <GiftItem flag={itemName[4]}/>
    <GiftItem flag={itemName[5]}/>
  </div>
)
};

export default TableComponent;
