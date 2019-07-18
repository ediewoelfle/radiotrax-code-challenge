import React from "react";

export const Devices = ({ devices }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Device ID</th>
          <th>Firmware</th>
          <th>Date Available</th>
          <th>Battery Level</th>
          <th>Temp</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => (
          <DeviceRow device={device} />
        ))}
      </tbody>
    </table>
  );
};

const DeviceRow = device => {
  const {
    application_code,
    asset_identifier,
    battery_level,
    date_device_available,
    device_id,
    firmware_version,
    id,
    internal_temperature,
    manufacturer,
    status
  } = device.device;

  console.log("deviceId", device_id);
  return (
    <tr>
      <td>{id}</td>
      <td>{device_id}</td>
      <td>{firmware_version}</td>
      <td>{date_device_available}</td>
      <td>{battery_level}</td>
      <td>{internal_temperature}</td>
    </tr>
  );
};
