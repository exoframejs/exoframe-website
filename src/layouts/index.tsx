import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import './index.scss';

class Header extends React.PureComponent<{}> {
  public render() {
    return (
      <div className="header">
        <nav>
          <Link to="/">
            <img alt="exoframe" src="https://github.com/exoframejs/exoframe/raw/master/logo/png/exo_white.png" style={{ width: '100px' }} />
          </Link>
          <Link to="/tags">Tags</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/docs">Docs</Link>
        </nav>
      </div>
    );
  }
}

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location?: {
    pathname: string;
  };
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, {}> {
  componentDidMount() {
    deckDeckGoHighlightElement();
  }
  public render() {
    return (
      <div>
        <Helmet
          title="Exoframe DOCS"
          meta={[
            { name: 'description', content: 'Exoframe is a self-hosted tool that allows simple one-command deployments using Docker' },
            { name: 'keywords', content: 'Exoframe, docker, deployment, tool, simple' }
          ]}
        />
        <Header />
      </div>
    );
  }
}

export default DefaultLayout;
