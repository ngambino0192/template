import React from 'react';
import { Link, graphql } from 'gatsby';

const Shaka = () => {
  return (
    <>
      <nav class="navbar navbar-default navbar-fixed-top" id="top">
        <div class="container">
          <div class="navbar-header page-scroll">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/">Blog Template</Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
      <div class="row">
        {/* <!-- start portfolio item --> */}
        <div class="col-md-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              {/* <img src={image} alt="img02" class="img-responsive" /> */}
              <figcaption>
                <h2>Beaches</h2>
                <Link to="/">View more</Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div>hello</div>
      <div>shaka</div>
    </>
  );
};

export default Shaka;
