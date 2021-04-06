/*
 * @Author: LIn bowen
 * @Date: 2021-04-06 09:40:44
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-04-06 17:53:02
 * @Descripttion:
 */
import React from 'react';
import { useState, useEffect } from 'react';

import styles from './index.less';
const CustomButton = (props: any) => {
  const buttonClick = (val) => {
    console.log('button click');
    console.log(val);
  };

  // setClickState(true);

  return (
    <div
      className={styles.cButton}
      style={{
        width: `${props.width ? props.width : '120px'}`,
        backgroundColor: `${props.backgroundColor}`,
      }}
      onClick={props.onClick ? props.onClick : buttonClick}
    >
      {props.text}
    </div>
  );
};

const CustomSearch = () => {
  return <div>123</div>;
};

const InputButton = (props: any) => {
  const buttonClick = () => {
    console.log('button click');
  };
  return (
    <input
      type="button"
      className={styles.cButton}
      value={props.text}
      onClick={props.onClick ? props.onClick : buttonClick}
    />
  );
};

export default { CustomButton, CustomSearch, InputButton };
