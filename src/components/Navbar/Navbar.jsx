import {Link} from "react-router-dom";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
/*import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';*/
import Avatar from '@mui/material/Avatar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Navbar = () => {
    const style ={
        color: 'white',
        margin: "10px",
        textDecoration: 'none',
        listStyle : 'none'
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

 /* const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };*/

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem >
      
        <p>Home</p>
        <Link style={style}  to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        
        <p>About</p>
        <Link style={style}  to="/about">About</Link>
      </MenuItem>

      <MenuItem >
      <p>Users</p>
      <Link style={style} to="/users">Users</Link>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
      <p>Register</p>
      <Link style={style} to="/register">Register</Link>
      
      </MenuItem>
    </Menu>
  );
    return (
      <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           <Link style={style}  to="/">
           <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcayWfnazV_CzCg9fBuq_y0oyoe0XJc-W2JA&usqp=CAU" /></Link> 
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton  color="inherit">
            <Link style={style}  to="/">Home</Link>
              
            </IconButton>
            <IconButton
  
              color="inherit"
            >
              
            <Link style={style}  to="/about">About</Link>
        
            </IconButton>
            <IconButton>
            
            <Link style={style} to="/users">Users</Link>
          
            </IconButton>
            <IconButton>
            
            <Link style={style} to="/register">Register</Link>
          
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton  color="inherit">
            <Link style={style}  to="/">Home</Link>
              
            </IconButton>
            <IconButton
  
              color="inherit"
            >
              
            <Link style={style}  to="/about">About</Link>
        
            </IconButton>
            <IconButton>
            
            <Link style={style} to="/users">Users</Link>
          
            </IconButton>
            <IconButton>
            
            <Link style={style} to="/register">Register</Link>
          
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
     
{/** <ul className="right">
          <li>
            <Link style={style}  to="/">Home</Link>
          </li>
          <li>
            <Link style={style}  to="/about">About</Link>
          </li>
          <li>
            <Link style={style} to="/users">Users</Link>
          </li>
          <li>
            <Link style={style} to="/register">Register</Link>
          </li>
        </ul> */}
        </div>
        
    )
}

export default Navbar
