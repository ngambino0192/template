import React from 'react';

import Layout from '../../components/Layout';
import HomepageTitle from '../../components/HomepageTitle';

export default class HomepageIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div>HomePageIndexPage</div>
              <HomepageTitle />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
