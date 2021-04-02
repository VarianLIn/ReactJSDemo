/*
 * @Author: LIn bowen
 * @Date: 2021-04-01 14:55:37
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-04-02 09:35:36
 * @Descripttion:
 */

import { useState, useEffect } from 'react';
import type { FC, CSSProperties } from 'react'; // 导入类型

const Test: FC = () => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('hi');

	// hook
  useEffect(() => {
    console.log(1);

    return () => {
      console.log(2);
    };
  }, [checked]);

  const wrapStyle: CSSProperties = {
    color: checked ? 'red' : 'blue',
  };

  const handleClick = () => {
    setChecked(true);
    // setName('aaa');
  };

  return (
    <div style={wrapStyle} onClick={handleClick}>
      abc, {name}
    </div>
  );
};

export default Test;

// import { Component } from 'react';

// interface TestState {
//   checked: boolean;
// }

// class Test extends Component<any, TestState> {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       checked: false,
//     };
//   }

//   get wrapStyle() {
//     const { checked } = this.state;
//     console.log(11);
//     return {
//       color: checked ? 'red' : 'blue',
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       checked: true,
//     });
//   };

//   render() {
//     const { name } = this.props;
//     const { wrapStyle } = this;

//     return (
//       <div style={wrapStyle} onClick={this.handleClick}>
//         {name || 'abc'}
//         <span style={wrapStyle}>ssdsd</span>
//         {this.renderXXXComponent()}
//       </div>
//     );
//   }
// }

// export default Test;
