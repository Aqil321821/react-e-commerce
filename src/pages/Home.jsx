import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import ImgMediaCard from '../components/Card';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Typography className='mt-3 text-center' variant='h3' color='initial'>
        POSTS!
      </Typography>

      <Box className='d-flex container justify-content-center flex-wrap gap-3'>
        {data.length > 0 ? (
          data.map((item) => {
            return <ImgMediaCard title={item.title} body={item.body} key={item.id}  id={item.id}/>;
          })
        ) : (
          <Typography>Loading .......</Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
