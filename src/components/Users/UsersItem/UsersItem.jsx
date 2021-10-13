import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

/** ICONS */
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import '../UsersItem/styles.css'
const UsersItem = ({item}) => {
  
    return (
      
        <div> 
            <Card className='cardUsersItem' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image ="https://dolphinkaravan.com.tr/wp-content/uploads/2019/12/bay-icon.jpg" className="objectFit"/>
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.name}    
        </Typography>
        <Typography variant="body2" color="text.secondary">
            
            <Typography  className="paragraphCart"> <AccountCircleIcon className="Icon"/>{item.username}</Typography>
            <Typography  className="paragraphCart"> <WebOutlinedIcon className="Icon"/>{item.website}</Typography>
            <Typography   className="paragraphCart"> <PhoneForwardedOutlinedIcon className="Icon"/>{item.phone}</Typography>
            <Typography   className="paragraphCart"> <EmailOutlinedIcon className="Icon"/>{item.email}</Typography>
        
        </Typography>
      </CardContent>
      <CardActions className="split">
          <div >
       <FavoriteBorderOutlinedIcon className="leftCart pointer"/>
        <ModeCommentOutlinedIcon className="pointer"/>
        </div>
        <div className="rightCart">
        <SendOutlinedIcon className="pointer"/>
        </div>
      </CardActions>
    </Card>
        </div>
    )
}

export default UsersItem
