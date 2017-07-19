import React from "React";
import { Menu, Icon } from 'antd';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: 'home'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home" className="menu-item">
          <Icon type="home" />首页
        </Menu.Item>
        <Menu.Item key="movie" className="menu-item">
          <Icon type="appstore" />电影
        </Menu.Item>
        <Menu.Item key="music" className="menu-item">
          <Icon type="sound" />音乐
        </Menu.Item>
        <Menu.Item key="book" className="menu-item">
          <Icon type="book" />图书
        </Menu.Item>
        <Menu.Item key="album" className="menu-item">
          <Icon type="picture" />相册
        </Menu.Item>
      </Menu>
    );
  }
}
export default NavBar;