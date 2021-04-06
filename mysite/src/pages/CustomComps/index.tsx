/*
 * @Author: LIn bowen
 * @Date: 2021-04-02 10:53:24
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-04-06 17:58:15
 * @Descripttion:
 */

// import React from 'react';
// import type { FC } from 'react';
// const Vbutton: FC = () => {};

import { useState } from 'react';

import Custom from './cButton';
const mainDiv = () => {
  const { CustomButton, CustomSearch, InputButton } = Custom;
  const [state, setState] = useState(-1);

  // const Click = (e) => {
  //   // setState();
  //   console.log(e);
  // };

  function buttonClick(val) {
    // console.log(e.target);
    // console.log(val);
    setState(val);
  }
  return (
    <>
      {[1, 2, 3, 4, 5].map((index) => (
        <CustomButton
          id={index}
          key={index.toString()}
          onClick={() => {
            buttonClick(index);
          }}
          text={index + '-button'}
          backgroundColor={state == index ? '#0ff' : '#707070'}
        />
      ))}

      {/* <CustomSearch /> 
      <CustomButton onClick={Click} text="button" />
      <CustomButton onClick={Click} text="button" />
      <CustomButton onClick={Click} text="button" />*/}
    </>
  );
};
export default mainDiv;

/**  组建测试2 */
// import ReactDOM from 'react-dom';

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//   return <div>Warning!</div>;
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { showWarning: true };
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState((state) => ({
//       showWarning: !state.showWarning,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Page />, document.getElementById('root'));
// export default Page;

/**   组件测试1   */
// import { useState } from 'react';

// const NumberList = (props: any) => {
//   const [numbers, setNumbers] = useState(props.numbers);

//   return (
//     <ul>
//       {numbers &&
//         numbers.map((number: number) => (
//           <li key={number.toString()} value={number}>
//             {number}
//           </li>
//         ))}
//     </ul>
//   );
// };

// const ListItem = () => {
//   const numbers = [1, 2, 3, 4, 5];
//   return <NumberList numbers={numbers} />;
// };

// export default ListItem;
