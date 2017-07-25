import React from "React";
import { Spin } from 'antd';


class Loading extends React.Component{
  render() {
    return (
      <div>
        <Spin size="large" wrapperClassName="spin" style={{margin:"0 auto",display: "block"}} />
      </div>
    );
  }
}

export default Loading;