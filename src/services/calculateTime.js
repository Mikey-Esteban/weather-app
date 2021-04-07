const calculateTime = (unix_timestamp, timezone) => {
  const dt = unix_timestamp * 1000;
  const offset = timezone / 3600;

  // create Date object for current location
  const d = new Date(dt);

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * offset).toLocaleTimeString(
    navigator.language,
    {
      hour: "numeric",
      minute: "2-digit"
    }
  );
  // const nt = nd
  //   .toLocaleString()
  //   .split(",")[1]
  //   .trim();
  // return time as a string
  return nd;
};

export default calculateTime;
