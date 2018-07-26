import React, { Component } from 'react';
import Link from 'next/link';
import './Content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="content">
			  <div className="row row_img-alignment">
					<div className="row__block row__text-block row__block_margin-10">
						<p>
							<span>Помогаем</span>
							компаниям продавать товары и услуги в
							интернете, сохранять и повышать позиции в поисковой
							выдаче, постоянно развивая их сайты
						</p>
					</div>
					<div className="row__block row__block-background row__block_margin-10">
            <Link href="http://m-kran.ru/">
  						<a title="Аренда кранов Liebherr" target="_blank">
  					    <p>Аренда кранов Liebherr</p>
  						  <img src="../../static/img/first-site-img.jpg" />
  						</a>
            </Link>
					</div>
					<div className="row__block row__block-background row__block_margin-10">
            <Link href="https://iamrealtor.ru/">
  						<a title="Первый онлайн сервис по юридической проверке недвижимости перед покупкой" target="_blank">
  					    <p>Первый онлайн сервис по юридической проверке недвижимости перед покупкой</p>
  					    <img src="../../static/img/second-site-img.jpg" />
  						</a>
            </Link>
					</div>
		    </div>
		    <div className="row row_img-alignment row_last">
		      <div className="row__block row__block-background row__block_margin-10">
            <Link href="http://spektra.ru/">
    					<a title="Разработка проектов перепланировки жилых и нежилых помещений" target="_blank">
    			      <p>Разработка проектов перепланировки жилых и нежилых помещений</p>
    			      <img src="../../static/img/third-site-img.jpg" />
    					</a>
            </Link>
		      </div>
		      <div className="row__block row__block-background row__block_margin-10">
          <Link href="https://refurni.ru/">
    				<a title="Дизайнерская мебель в наличии и на заказ" target="_blank">
            	<p>Дизайнерская мебель в наличии и на заказ</p>
            	<img src="../../static/img/fourth-site-img.jpg" />
    				</a>
          </Link>
		      </div>
		      <div className="row__block row__block-background row__block_margin-10">
          <Link href="http://gsps.ru/">
  					<a title="Городская служба перепланировок и согласований" target="_blank">
  	        	<p>Городская служба перепланировок и согласований</p>
  	        	<img src="../../static/img/fifth-site-img.jpg" />
  					</a>
          </Link>
		    </div>
		  </div>
		</div>
    );
  }
}

export default Content;
