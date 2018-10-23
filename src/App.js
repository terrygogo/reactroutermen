import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/ExitToApp";
import { Route, Switch, withRouter, NavLink } from "react-router-dom";

import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import Menu4 from "./pages/Menu4";
import Menu5 from "./pages/Menu5";
import Home from "./pages/Home";

const drawerWidth = 240;
const menu = [
  {
    title: "Home",
    index: 0,
    component: Home,
    path: "/",
    icon: DashboardIcon
  },
  {
    title: "메뉴1",
    index: 1,
    component: Menu1,
    path: "/menu1",
    icon: ShoppingCartIcon
  },
  {
    title: "메뉴2",
    index: 2,
    component: Menu2,
    path: "/menu2",
    icon: PeopleIcon
  },
  {
    title: "메뉴3",
    index: 3,
    component: Menu3,
    path: "/menu3",
    icon: BarChartIcon
  },
  {
    title: "메뉴4",
    index: 4,
    component: Menu4,
    path: "/menu4",
    icon: LayersIcon
  },
  {
    title: "메뉴5",
    index: 5,
    component: Menu5,
    path: "/menu5",
    icon: NotificationsIcon
  }
];

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  state = {
    open: true,
    selectedIndex: 0
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const location = this.props.location;
    const ndx = menu.find(item => item.path === location.pathname);
    this.setState({ selectedIndex: ndx.index });

    this.unlisten = this.props.history.listen(location => {
      const ndx = menu.find(item => item.path === location.pathname);
      this.setState({ selectedIndex: ndx.index });
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              Dashboard
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {menu.map(item => (
                <ListItem
                  button
                  key={item.index}
                  component={NavLink}
                  to={item.path}
                  selected={this.state.selectedIndex === item.index}
                  onClick={event => this.handleListItemClick(event, item.index)}
                >
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu1" component={Menu1} />
              <Route path="/menu2" component={Menu2} />
              <Route path="/menu3" component={Menu3} />
              <Route path="/menu4" component={Menu4} />
              <Route path="/menu5" component={Menu5} />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Dashboard));
