import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
 
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

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


const x = 500

class Menu2 extends Component {
  state = {
    getcha: null,
    postcha: null,
    gstatus: false,
    pstatus: false
  };
  componentDidMount() {
      this.getImages();
         this.postImages();
    /*let intervals = setInterval(() => {
      this.fetchImages();
    }, 1000); */
  };

  getImages = async () => {
    const response = await axios.get("http://localhost:3030/hello", { params: { name: 'kimchi'}});
    this.setState({
      gstatus: true,
      getcha: response.data
    });
  };
   postImages = async () => {
    const response = await axios.post("http://localhost:3030/api/echo", {  name: 'mandu'});
    this.setState({
      pstatus: true,
      postcha: response.data
    });
  };
  render() {

     
    return (
      <div>
       { this.state.gstatus === false ? <div>"wait for response"</div>  : <div><Button color="primary"> get </Button> {this.state.getcha.get_message.name}  <Button color="default">  reply </Button>  {this.state.getcha.message} </div> }
     
       { this.state.pstatus === false ? <div>"wait for response"</div>  : <div><Button color="secondary"> post </Button>  {this.state.postcha.post_message.name}  <Button color="default">   reply</Button> {this.state.postcha.message}  </div> }
      </div>
    );
  }
}

Menu2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu2);
