import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});




class Menu2 extends Component {
  state = {
    images: [],
    status: false
  };
  componentDidMount() {
    setInterval(() => {
     //  this.fetchImages();
    }, 5000);
  }

  fetchImages = async () => {
    const response = await axios.get("http://localhost:3030/api/services");
    this.setState({
      status: true,
      images: response.data
    });
  };
  render() {
    const { classes } = this.props;

    if (this.state.images.length === 0) return ( <div>
      <Typography>to get data from http://localhost:3030/api/services </Typography><CircularProgress /> </div>) ;
    const data = this.state.images.map((item, index) => {
      var entry = {
        key: index,
        name: item.name,
        cpup: item.pcpu,
        memp: item.pmem,
        runs: item.running
      };
      return entry;
    });

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Service Name</TableCell>
              <TableCell numeric>CPU %</TableCell>
              <TableCell numeric>Memory %</TableCell>
              <TableCell numeric>Run State)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (
                <TableRow key={row.key}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.cpup}</TableCell>
                  <TableCell numeric>{row.memp}</TableCell>
                  <TableCell numeric>{row.runs ? "Run" : "Stop"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Menu2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu2);
