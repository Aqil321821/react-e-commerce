import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import useSavePost from '../context/savePost';

export default function ImgMediaCard({ title, body, id }) {
  const navigate = useNavigate();
  const { setSavePost, savePost } = useSavePost();

  const gotoProduct = () => {
    navigate(`/product/${id}`);
  };
  const savePostToContext = (e) => {
    e.stopPropagation();
    console.log('save post called');
    setSavePost([...savePost])
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={gotoProduct}>
      <CardMedia component='img' alt='green iguana' height='140' image='https://images.unsplash.com/photo-1732980512600-5ebc0d22fa69?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={savePostToContext}>
          Save Post
        </Button>
      </CardActions>
    </Card>
  );
}
