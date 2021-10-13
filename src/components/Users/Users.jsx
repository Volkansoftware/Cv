import React, {useState,useEffect} from 'react'
import UsersItem from './UsersItem/UsersItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


import './UsersItem/styles.css'
const Users = () => {

   const [users,setUsers] =useState([]);
 
    const FetchItems = async () =>{
       const data = await fetch('https://jsonplaceholder.typicode.com/users');
       const items = await data.json()
      
      
       setUsers(items);
       console.log(items);
    
    }
   useEffect(() => {
      FetchItems();
   }, [])

 
 
    return (
        
        <div>
           
            <Container className='containerUsers'>
            <div>
          
                </div>
                 <Grid container spacing={3}>
                {users.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <UsersItem
                         item={item}
                         
                         />
                    </Grid>
                ))}
        </Grid> 
        </Container>
        
       
     </div>
    
    )
}

export default Users
