import React from "React";
import { Layout, Menu, Icon } from 'antd';
import NavBar from "./header/NavBar.js";
import HomeContent from "./HomeContent/HomeContent.js";
import "./style.css";

const { Header, Content, Footer } = Layout;

class TotalPage extends React.Component {
	render() {
		return (
			<Layout className="layout" style={{background:"white", minWidth: "800px"}} >

			    <Header id="header">
			      <div className="logo">
					<img src={require("./img/logo.png")}  alt="logo" />
			      </div>
			      <div className="nav-div">
						<NavBar />
			      </div>
			    </Header>


			    <Content style={{ margin:"0 50px", border:"1px solid #D0CFCF", padding:"10px"}}>
					<HomeContent></HomeContent>
			    </Content>

			    <Footer style={{ textAlign: 'center' }}>
			      TO KNOW ©2016 Created by xiaolinsean
			    </Footer>
			  </Layout>
		);
	}
}

export default  TotalPage;
