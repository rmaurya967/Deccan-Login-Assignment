import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import './App.css';
import Select from '@material-ui/core/Select';
import { Input, FormGroup, InputAdornment } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faClock } from '@fortawesome/free-regular-svg-icons';
import { Grid, Cell } from 'react-mdl';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  createc: {
    fontSize: "18px", fontWeight: "bold", color: "blue", margin: "15px"
  },
  button: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '30px',
    backgroundColor: fade(theme.palette.primary.main, 0.90),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.dark, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button1: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  button2: {
    backgroundColor: "blue"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [eve, setEve] = React.useState('');
  const eventFunction = (event) => {
    setEve(event.target.value)
  }

  const [title, setTitle] = React.useState('');
  const titleFunction = (event) => {
    setTitle(event.target.value)
  }

  const [cate, setcate] = React.useState('');
  const cateFunction = (event) => {
    setcate(event.target.value)
  }

  const [summary, setsummary] = React.useState('');
  const summaryFunction = (event) => {
    setsummary(event.target.value)
  }

  const [reg, setreg] = React.useState('');
  const regFunction = (event) => {
    setreg(event.target.value)
  }

  {
    const [link, setlink] = React.useState('');
    const linkFunction = (event) => {
      setlink(event.target.value)
    }

    const [sdate, setsdate] = React.useState('');
    const sdateFunction = (event) => {
      setsdate(event.target.value)
    }

    const [stime, setstime] = React.useState('');
    const stimeFunction = (event) => {
      setstime(event.target.value)
    }

    const [edate, setedate] = React.useState('');
    const edateFunction = (event) => {
      setedate(event.target.value)
    }

    const [etime, setetime] = React.useState('');
    const etimeFunction = (event) => {
      setetime(event.target.value)
    }

  

    var titleError = " Please fill mandatory fields ";
    var eveError = " Please fill mandatory fields ";
    var cateError = " Please fill mandatory fields ";
    var summaryError = " Please fill mandatory fields ";
    var regError = " Please fill mandatory fields ";

    var linkError = " Please fill mandatory fields ";
    var sdateError = " Please fill mandatory fields ";
    var edateError = " Please fill mandatory fields ";
    var stimeError = " Please fill mandatory fields ";
    var etimeError = " Please fill mandatory fields ";

    const valid = () => {

      if(title.length < 1 ){
          
          return titleError;
      }
      else if(eve.length < 1){
          return eveError;
      }
      else if(cate.length < 1){
          return cateError;
      }
      else if(summary.length < 1){
          return summaryError;
      }
      else if(reg.length < 1){
        return regError;
    }
      else if(link.length < 1){
          return linkError;
      }
     
      else if(stime.length < 1){
          return stimeError;
      }
      else if(etime.length < 1){
          return etimeError;
      }
      else if(sdate.length < 1){
          return sdateError;
      }
      else if(edate.length < 1){
          return edateError;
      }
      
      else{
          return true
      }
  }
 
  const submittion = () => {
      
      if(valid() === true){
          alert(`Account for ${title} created successfully`);

    
      }

      else{
          alert(" fields with * are mandatory ")
      }
  }




    return (
      <div>
        <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Advancing for Humanity
          </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </div>
        <form className={classes.root} noValidate autoComplete="off">


          <Grid>
            <Cell col={8}>
              <h6 style={{ fontSize: "18px", fontWeight: "bold", color: "blue", margin: "0px" }}>Create Event</h6>
            </Cell>
            <Cell col={4} >
              <button className="cancel-button" style={{ float: "right" }}>Cancel</button>
              <button className="create-button" style={{ float: "right" }} type="submit" onClick={submittion}  >Create</button>
            </Cell>
          </Grid>

          <div style={{ width: "50%", margin: "auto" }}>
            <label>Add Event in *</label><br />
            <Select
              style={{ width: "100%" }}
              value={eve}
              onChange={eventFunction}
            >
              <MenuItem value={"eventValue1"}>event 1</MenuItem>
              <MenuItem value={"eventValue2"}>event 2</MenuItem>
            </Select>
            <p style={{ color: "red", fontSize: "12px" }}>{eveError}</p>
            <br />

            <button style={{ width: "100px", height: "100px", marginTop: "12px", marginBottom: "12px" }} >Upload Image</button>
            <br />


            <label>Title *</label><br />
            <Input
              style={{ width: "100%", marginBottom: "12px" }}
              value={title}
              onChange={titleFunction}
            />
            <p style={{ color: "red", fontSize: "12px", marginTop: "-20px" }}>{titleError}</p>
            <br />

            <label>Categories *</label><br />
            <Select
              style={{ width: "100%", marginBottom: "12px" }}
              value={cate}
              onChange={cateFunction}
            >
              <MenuItem value={"cateValue1"}>category 1</MenuItem>
              <MenuItem value={"cateValue2"}>category 2</MenuItem>
            </Select>
            <p style={{ color: "red", fontSize: "12px" }}>{cateError}</p>
            <br />
            <label>Short Summary *</label><br />
            <Input
              style={{ width: "100%", marginTop: "12px", marginBottom: "30px" }}
              value={summary}
              onChange={summaryFunction}
            />
            <p style={{ color: "red", fontSize: "12px", marginTop: "-20px" }}>{summaryError}</p>
            <br />
            <label style={{ marginBottom: "12px" }}>Type: Public</label><br />

            <FormGroup style={{ marginTop: "20px" }}>
              <label  >Registration site</label><br />
              <Input
                style={{ width: "100%", marginTop: "0px", marginBottom: "0px" }}
                value={reg}
                onChange={regFunction}
              />
              <p style={{color:"red", fontSize:"12px",marginTop:"-20px"}}>{regError}</p>
              <br />
            </FormGroup>


            <label>Is this a virtual event ?</label>
            <span style={{ marginLeft: "12px" }}>Yes</span>

            <Input
              style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}
              value={link}
              placeholder="online link"
              onChange={linkFunction}
            />
            <p style={{color:"red", fontSize:"12px"}}>{linkError}</p>
            <br />

            <Grid style={{ width: "70%", margin: "0px", marginLeft: "-15px" }}>
              <Cell col={6}>
                <FormGroup >
                  <label >Start Date *</label>
                  <Input
                    id="start-date-id"
                    value={sdate}
                    onChange={sdateFunction}
                  />
                  <p style={{color:"red", fontSize:"12px"}}>{sdateError}</p>
                </FormGroup>
              </Cell>
              <Cell col={6}>
                <FormGroup >
                  <label >Start Time *</label>
                  <Input
                    id="start-time-id"
                    value={stime}
                    onChange={stimeFunction}
                    endAdornment={
                      <InputAdornment position="end">
                        <FontAwesomeIcon icon={faClock} />
                      </InputAdornment>
                    }
                  />
                  <p style={{color:"red", fontSize:"12px"}}>{stimeError}</p>

                </FormGroup>
              </Cell>
            </Grid>

            <Grid style={{ width: "70%", margin: "0px", marginLeft: "-15px" }} >
              <Cell col={6}>
                <FormGroup >
                  <label >End Date *</label>
                  <Input
                    id="end-date-id"
                    value={edate}
                    onChange={edateFunction}
                  />
                  <p style={{color:"red", fontSize:"12px"}}>{edateError}</p>
                </FormGroup>
              </Cell>
              <Cell col={6}>
                <FormGroup >
                  <label >End Time *</label>
                  <Input
                    id="end-time-id"
                    value={etime}
                    onChange={etimeFunction}
                    endAdornment={
                      <InputAdornment position="end">
                        <FontAwesomeIcon icon={faClock} />
                      </InputAdornment>
                    }
                  />
                  <p style={{color:"red", fontSize:"12px"}}>{etimeError}</p>
                </FormGroup>
              </Cell>
            </Grid>

            <label> Message </label>
            <textarea style={{ width: "100%", height: "300px" }} />

            <label>Attachments ?</label><br />
            <button style={{ border: "dotted", height: "100px", width: "100%", margin: "8px 0px" }}>
              <FontAwesomeIcon icon={faImage} style={{ width: "40", height: "40", color: "gray" }} />
              <p style={{ fontsize: "14px", fontWeight: "bold" }}>Click here to upload file(s)</p>
            </button>

            <p style={{ marginTop: "24px", textAlign: "center" }}>Use option on the top right section of the screen to save your changes.</p>




          </div>







        </form>

      </div>
    );
  }
}
