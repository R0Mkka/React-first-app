import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeadMenu from '../Header/HeadMenu';
import ContentBox from '../ContentBox';
import './PageNotFound.scss';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Head>
          <title>Страница не найдена</title>
        </Head>
        <div className="page">
          <div className="header-wrapper">
            <div className="header">
              <HeadMenu home_link={true} />
            </div>
          </div>
          <ContentBox footer_padding={true}>
          <div className="content content__page-not-found content_padding-left-right-50">
            <h1>Страница не найдена</h1>
            <p>Запрашиваемая страница не найдена</p>
          </div>
          </ContentBox>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
