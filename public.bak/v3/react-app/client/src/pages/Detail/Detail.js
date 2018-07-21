import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Table } from "../../components/Table";

class Detail extends Component {
  state = {
    sheet: {}
  };
  // When this component mounts, grab the sheet with the _id of this.props.match.params.id
  // e.g. localhost:3000/sheets/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSheet(this.props.match.params.id)
      .then(res => this.setState({ sheet: res.data }))
      .catch(err => console.log(err));
  }

  render() {


    
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.sheet.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>

        
        <Row>
          <Col size="md-10 md-offset-1">
              <h1>GSheet Link</h1>
              <List>
              <ListItem>{"url: "+this.state.sheet.url}{this.state.sheet.gid}
              </ListItem>
              <ListItem>{"range: "+this.state.sheet.range}</ListItem>
              </List>
          </Col>
        </Row> 
       

        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Information</h1>
              <p>
                {this.state.sheet.data}
              </p>
            </article>
            <Table columns={this.state.sheet} data={this.state.sheet.title}/>;
          </Col>
        </Row>

        {/* <Row>
          <Table>
              
            </Table>
          </Row> */}

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Report List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
