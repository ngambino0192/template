import React from 'react';

import Layout from '../../components/Layout';
// import BlogRoll from '../../components/BlogRoll'

export default class HomepageIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div>Hello World!</div>
              {/* <BlogRoll /> */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
