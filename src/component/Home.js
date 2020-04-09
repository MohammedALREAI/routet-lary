import React, { Component } from "react";
import Button from "./NavButton";
import styled from "styled-components";
import { Container } from "./Maps";
const Subtitle = styled.h2`
  margin-top: 10px !important;
`;
const Section = styled.section`
  margin-top: 300px;
  a {
    margin-right: 10px;
  }
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <section className="section">
          <Container>
            <h1 className="title">Lazy Loading</h1>
            <Subtitle>
              A simple app to demonstrate how lazy loading routes in React
              works.
            </Subtitle>
            <Section>
              <Button name="Go to Maps page" link="/maps" />
              <Button name="Go to Blog page" link="/blog" />
            </Section>
          </Container>
        </section>
      </Container>
    );
  }
}

export default Home;
