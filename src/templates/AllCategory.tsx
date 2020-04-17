import React from 'react';
import Link from 'gatsby-link';
import './AllCategory.scss';
import PageProps from '../models/PageProps';
import DefaultLayout from '../layouts';

class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;

    if (categories) {
      return (
        <>
          <DefaultLayout />
          <div className="all-categories-content">
            <p>Category List</p>
            <p>
              {categories.map((category: any, index: number) => (
                <kbd key={index}>
                  <Link type="button" to={`/categories/${category}`} typeof="button">
                    {category}
                  </Link>
                </kbd>
              ))}
            </p>
          </div>
        </>
      );
    }
  }
}

export default AllCategoryTemplate;
