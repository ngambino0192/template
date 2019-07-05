import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import VacationItems from '../../components/VacationItems';
import {
  Background,
  VacationsContainer,
  HeaderContainer,
  VacationsTitle,
  Subtitle,
} from '../../styles/components/VacationStyles';

export default class VacationIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Background className="full-page" />
        <VacationsContainer>
          <HeaderContainer>
            <VacationsTitle>Vacations</VacationsTitle>
            <Subtitle>
              Don't want to invent your whole vacation? We have curated example
              week long vacations that you can adopt rather than creating your
              own!
            </Subtitle>
          </HeaderContainer>
          <VacationItems></VacationItems>
        </VacationsContainer>
      </Layout>
    );
  }
}
