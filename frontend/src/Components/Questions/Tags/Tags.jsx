import React from 'react';
import './tags.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../Loading/Loading';

function Tags({ tags }) {
  return (
    <aside className="wrapper-tags-fixed">
      <div className="wrapper-tags__title">
        <i className="fa fa-filter" />
        <span>Filters</span>
      </div>
      <hr />
      {tags && tags.length > 0 ? (
        <div className="wrapper-tags">
          {tags.map((tag) => (
            <Link
              to={`/${tag}`}
              className="tags__all"
              key={tag}
            >
              {tag}

            </Link>
          ))}
        </div>
      ) : (
        <div className="wrapper-tags">
          <Loading />
        </div>
      )}
    </aside>
  );
}

function mapStateToProps({ questionReducer }) {
  return {
    tags: questionReducer.tags,
  };
}

export default connect(mapStateToProps)(Tags);
