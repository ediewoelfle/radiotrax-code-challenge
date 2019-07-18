import React from "react";
// import * as R from "ramda";

// const sortByDate = R.sortBy(R.prop("date_device_available"));
// const sortByBattery = R.sortBy(R.prop("battery_level"));
// const sortyByTemp = R.sortBy(R.prop("internal_temperature"));
// const sortById = R.sortBy(R.prop("device_id"));

export const Devices = ({ devices }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Device Id</th>
          <th>Firmware</th>
          <th>Date Available</th>
          <th>Battery Level</th>
          <th>Temp</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => (
          <DeviceRow key={device.id} device={device} />
        ))}
      </tbody>
    </table>
  );
};

const DeviceRow = device => {
  const {
    // application_code,
    // asset_identifier,
    battery_level,
    date_device_available,
    device_id,
    firmware_version,
    id,
    internal_temperature
    // manufacturer,
    // status
  } = device.device;
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
