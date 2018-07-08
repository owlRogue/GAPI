import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table } from "../../components/Table";

class Sheets extends Component {
  state = {
    sheets: [],
    title: "",
    id: "",
    range: []
  };

  componentDidMount() {
    this.loadSheets();
  }

  loadSheets = () => {
    API.getSheets()
      .then(res =>
        this.setState({ sheets: res.data, title: "", id: "", range: [] })
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
    if (this.state.title && this.state.id && this.state.range) {
      API.saveSheet({
        title: this.state.title,
        author: this.state.author,
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
              <h1>What Report Should I Analyze?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
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
            
            {this.state.sheets.length ? (
              <List>
                {this.state.sheets.map(sheet => (
                  <ListItem key={sheet._id}>
                    <Link to={"/sheets/" + sheet._id}>
                      <strong>
                        {sheet.title} by {sheet.gid}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteSheet(sheet._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sheets;
