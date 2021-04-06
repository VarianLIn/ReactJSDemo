/*
 * @Author: LIn bowen
 * @Date: 2021-04-02 10:53:24
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-04-02 14:18:22
 * @Descripttion:
 */

// import
// import type { FC } from 'react';
// const Vbutton: FC = () => {};

import React from 'react';
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

import { useState } from 'react';

const NumberList = (props: any) => {
  const [numbers, setNumbers] = useState(props.numbers);

  return (
    <ul>
      {numbers &&
        numbers.map((number: number) => (
          <li key={number.toString()} value={number}>
            {number}
          </li>
        ))}
    </ul>
  );
};

const ListItem = () => {
  const numbers = [1, 2, 3, 4, 5];
  return <NumberList numbers={numbers} />;
};

export default ListItem;
