import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timezone = () => {
  const [timezoneData, setTimezoneData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetch timezone data form the backend API
    axios
      .get('http://localhost:8080/api/timezone')
      .then((response) => {
        setTimezoneData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div>
      <h1>Timezone Information </h1>
      <p>
        <strong>Timezone: </strong> {timezoneData.timezone}
      </p>
      <p>
        <strong>Current Time: </strong> {timezoneData.currentTime}
      </p>
    </div>
  );
};

export default Timezone;
