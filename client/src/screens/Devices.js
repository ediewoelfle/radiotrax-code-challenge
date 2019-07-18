import React from "react";
import * as R from "ramda";

export const Devices = props => {
  const { devices, sortBy, filterBy, reset } = props;

  if (!devices) return null;

  // get a list of all the device properties we want to filter by

  const firmwareVersions = R.uniq(
    devices.map(device => device.firmware_version)
  );

  console.log(firmwareVersions);

  const deviceIds = R.uniq(devices.map(device => device.device_id));

  console.log(deviceIds);

  const renderFilterButton = (key, value) => {
    return (
      <button
        key={value}
        onClick={() => {
          filterBy(key, value);
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          reset();
        }}
      >
        RESET
      </button>
      {firmwareVersions.map(version =>
        renderFilterButton("firmware_version", version)
      )}
      {deviceIds.map(id => renderFilterButton("device_id", id))}
      <table>
        <thead>
          <tr>
            <th>
              <button
                onClick={() => {
                  sortBy("id");
                }}
              >
                #
              </button>
            </th>
            <th>Device Id</th>
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
    </>
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
