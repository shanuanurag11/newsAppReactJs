import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/Style/WebView.css'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import GroupIcon from '@material-ui/icons/Group';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      zIndex:theme.zIndex.drawer+1
    },
    backgroundColor:'#03ACE4',

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar

  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#daeaef'
    
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

    function Layout({props,updateCatValue}) {


  const classes = useStyles();
  const theme = useTheme();
  const [catName, setCatName] = React.useState("Top ");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [categories,setCategory]= React.useState([{"name":"Business","value":"business","icon":<BusinessIcon/>},{"name":"Entertainment","value":"entertainment","icon":<HeadsetMicIcon/>},{"name":"General","value":"general","icon":<GroupIcon/>},{"name":"Health","value":"health","icon":<LocalHospitalIcon/>},{"name":"Science","value":"science","icon":<FlightTakeoffIcon/>},{"name":"Sports","value":"sports","icon":<SportsCricketIcon/>},{"name":"Technology","value":"technology","icon":<LaptopChromebookIcon/>}]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const updateCategory=(val,name)=>{
      updateCatValue(val)
      setCatName(name)
 
  }
  const gotoHome=()=>{
    updateCatValue("general")
    setCatName("Top")
  }


  const drawer = (
    <div><Hidden smDown>
      <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        {categories.map((data, index) => (
          <ListItem className={data.name==catName?"active-link":""} 
          button key={index}  
          onClick={()=>updateCategory(data.value,data.name)} 
          style={{borderBottom:'solid 1px #FAFAFA'}}>
            <ListItemIcon>{data.icon}</ListItemIcon>
            <ListItemText  primary={data.name} />

          </ListItem>
        
        ))}
      </List>
      

    </div>
  );

  const container = undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{fontWeight:'bold',cursor:'pointer',margin:'auto'}} className="mob-view-hdr" onClick={()=>gotoHome()}>
           {"Today's "+catName+" News"}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
    
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
 
    </div>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node
};

export default Layout;