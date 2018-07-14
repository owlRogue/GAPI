import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
// import { TextArea } from "../../components/Form";
// import { Table } from "../../components/Table";

class Sheets extends Component {
  state = {
    sheets: [],
    title: "",
    gid: "",
    range: "",
    url: ""
  };

  componentDidMount() {
    this.loadSheets();
  };

  loadSheets = () => {
    API.getSheets()
      .then(res =>
        this.setState({ sheets: res.data, title: "", gid: "", range: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteSheet = id => {
    API.deleteSheet(id)
      .then(res => this.loadSheets())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.gid && this.state.range) {
      API.saveSheet({
        title: this.state.title,
        gid: this.state.gid,
        range: this.state.range
      })
        .then(res => this.loadSheets())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Add a Google Sheet ID to View a Visual Representation of your Data</h2>
              <h3>Coming soon: Link any non-nested JSON API endpoint!</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="sheet title (required)"
              />
              <Input
                value={this.state.gid}
                onChange={this.handleInputChange}
                name="gid"
                placeholder="google sheet id (required)"
              />
              <Input
                value={this.state.range}
                onChange={this.handleInputChange}
                name="range"
                placeholder="range in array format (required)"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.gid && this.state.range)}
                onClick={this.handleFormSubmit}
              >
                Submit Sheet
              </FormBtn>
            </form>
          </Col>
          
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Report List</h1>
            </Jumbotron>
            

            {/* // MOVE THESE TO NAVBAR:: */}
            {this.state.sheets.length ? (
              <List>
                {this.state.sheets.map(sheet => (
                    // <div> {sheet.url} + {sheet.gid}
                    // </div>
                  <ListItem key={sheet._id}>
                    <Link to={"/sheets/" + sheet._id}>
                      <strong>
                        {sheet.title}
                        {/* {sheet.gid} */}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteSheet(sheet._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <div><h3>No Results to Display</h3>
              <h2>test this link: http://localhost:3000/sheets/5b428f50f7677131085e1b5c</h2>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sheets;
