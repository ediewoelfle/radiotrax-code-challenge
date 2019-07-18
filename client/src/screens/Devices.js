import React from "react";

export const Devices = props => {
  const { devices, sortBy } = props;

  if (!devices) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <button
              onClick={() => {
                sortBy("device_id");
              }}
            >
              Device Id
            </button>
          </th>
          <th>Firmware</th>
          <th>
            <button
              onClick={() => {
                sortBy("date_device_available");
              }}
            >
              Date Available
            </button>
          </th>
          <th>
            <button
              onClick={() => {
                sortBy("battery_level");
              }}
            >
              Battery Level
            </button>
          </th>
          <th>
            <button
              onClick={() => {
                sortBy("internal_temperature");
              }}
            >
              Temp
            </button>
          </th>
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
