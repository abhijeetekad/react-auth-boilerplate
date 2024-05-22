import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";

function Nav() {
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="w-full flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <div className="md:hidden">
        <MenuOutlined onClick={showDrawer} />
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <a href="#" className="hover:text-blue-500">
          About
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
}

export default Nav;
