import React, { useState } from "react";
import "./App.css";
import { Button, Drawer, Layout } from "antd";
import DeviceList from "./comonents/Devices";
import DeviceForm from "./comonents/DeviceForm";

const { Content } = Layout;

function App() {
  const [drawerVisible, setDrawerVisibility] = useState(false);
  const [listpdated, setListUpdated] = useState(false);
  const onClose = () => {
    setDrawerVisibility(false);
    setListUpdated(true);
  };
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          {<Button className="add-device-button" type="primary" onClick={
            () => {
              setDrawerVisibility(true);
            }
          }>
            Add Device
          </Button>}
          <DeviceList listpdated={listpdated}  />
        </div>
        <Drawer
          title="Add Device Form"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={drawerVisible}
          width={window.innerWidth/4}
        >
          <DeviceForm close={onClose}/>
        </Drawer>
      </Content>
    </Layout>
  );
}

export default App;
