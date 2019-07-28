import React from "react";
import GiftItem from "./GiftItem";



const TableComponent = () => {

  const itemName = [
    'MacBook Air -Apple',
    'ザ・プレミアム・モルツ',
    'ルンバ i7+',
    'Callaway EPIC FLASH',
    'JTB旅行券 3万円',
    'QUOカード500円'
  ];

  const imgUrl = [
    './img/macbook_01.png',
    './img/premium-malts_01.png',
    './img/rumba_01.png',
    './img/driver_01.png',
    './img/gift30_01.png',
    './img/quo-card_01.jpg'
  ];

  

  return (
  <div className='giftItems'>
    <GiftItem flag={itemName[0]} url={imgUrl[0]} labelcolor='black' />
    <GiftItem flag={itemName[1]} url={imgUrl[1]} labelcolor='black'/>
    <GiftItem flag={itemName[2]} url={imgUrl[2]} labelcolor='black'/>
    <GiftItem flag={itemName[3]} url={imgUrl[3]} labelcolor='white'/>
    <GiftItem flag={itemName[4]} url={imgUrl[4]} labelcolor='black'/>
    <GiftItem flag={itemName[5]} url={imgUrl[5]} labelcolor='black'/>
  </div>
  )
};

export default TableComponent;
