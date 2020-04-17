import React from 'react';
import Link from 'gatsby-link';
import './AllTag.scss';
import PageProps from '../models/PageProps';
import DefaultLayout from '../layouts';

class AllTagTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { tags } = this.props.pathContext;

    if (tags) {
      return (
        <>
          <DefaultLayout />
          <div className="all-tags-content">
            <p>Tag List</p>
            <p>
              {tags.map((tag: any, index: number) => (
                <kbd key={index}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </kbd>
              ))}
            </p>
          </div>
        </>
      );
    }
  }
}

export default AllTagTemplate;
