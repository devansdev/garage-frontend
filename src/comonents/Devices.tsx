import React, { useEffect, useState } from "react";
import "./Devices.css";
import { Alert, List, message, Spin, Typography } from "antd";
import { loadDevices } from "../services/device";
import { Device } from "../types/device";

export interface DeviceListProperties{
    listpdated: boolean
}

function DeviceList(props: DeviceListProperties) {
    const [isLoading, setIsLoading] = useState(true);
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        loadDevices().then(devices => {
            setDevices(devices);
            setIsLoading(false);
        }).catch(() => {
            message.error('Could not load the device list!');
        });
    }, []);

    if (isLoading) {
        return <Spin className="spin" />;
    }
    
  return (
      <>
      {devices.length > 0 && (
        <List
          header={<div>Devies List</div>}
          bordered
          dataSource={devices}
          renderItem={(item:Device) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
            </List.Item>
          )}
        />
          )}
          {
              devices.length === 0 && (<Alert message="There are no devices in the system" type="warning" />)
          }
    </>
  );
}

export default DeviceList;
