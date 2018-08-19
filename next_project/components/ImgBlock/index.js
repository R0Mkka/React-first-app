import React, { Component } from 'react';
import Link from 'next/link';

class ImgBlock extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return(
      <div className="content__block content__block_margin-10">
        <Link href={this.props.href}>
          <a title={this.props.title} target="_blank">
            <div className="content__block-background">
              <p>{this.props.title}</p>
            </div>
            <img src={this.props.img} />
          </a>
        </Link>
      </div>
    );
  }
}

export default ImgBlock;
