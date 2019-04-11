/**
 * 必须要react和react-dom 16.7以上
 */

import React from 'react'

export default class Element extends React.Component {
  render() {
    const Ele = (
        <div id= "id1" key="key1" ref={(refs)=>{ this.ref = refs }} onClick={()=>{console.log('click')}}>
          <h1>
            Hello
            <span>
              React
            </span>
            </h1>
          <p>React-source-code</p>
        </div>
    );
    console.log(Ele);
    return (
      <div>element</div>
    );
  }
}
