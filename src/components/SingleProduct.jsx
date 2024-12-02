import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {
  const params = useParams();
  const [data, setData] = useState(null);

  console.log(params);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{data?.title}</div>;
}

export default SingleProduct;
