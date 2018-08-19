import Head from 'next/head';
import Link from 'next/link';
import HeadMenu from '../components/Header/HeadMenu';
import ContentBox from '../components/ContentBox';
import ImgBlock from '../components/ImgBlock';
import '../scss/style.scss';

const Works = () => (
  <div>
    <Head>
      <title>Наши работы</title>
    </Head>
    <div className="page">
      <div className="header-wrapper">
        <div className="header">
          <HeadMenu home_link={true} />
        </div>
      </div>
      <ContentBox>
        <div className="content content__works">
          <div className="content__blocks-wrapper content_alignment">
            <div className="content__block content__block_margin-10">
              <h3>Наши <span>работы</span></h3>
              <p>
                Экспертиза команды позволяет запускать сайты, решающие бизнес-задачи для их владельцев
              </p>
            </div>
            <ImgBlock href="http://m-kran.ru/"
                      title="Аренда кранов Liebherr"
                      img="../../static/img/first-site-img.jpg" />
            <ImgBlock href="https://iamrealtor.ru/"
                      title="Первый онлайн сервис по юридической проверке недвижимости перед покупкой"
                      img="../../static/img/second-site-img.jpg" />
            <ImgBlock href="http://spektra.ru/"
                      title="Разработка проектов перепланировки жилых и нежилых помещений"
                      img="../../static/img/third-site-img.jpg" />
            <ImgBlock href="https://refurni.ru/"
                      title="Дизайнерская мебель в наличии и на заказ"
                      img="../../static/img/fourth-site-img.jpg" />
            <ImgBlock href="http://gsps.ru/"
                      title="Городская служба перепланировок и согласований"
                      img="../../static/img/fifth-site-img.jpg" />
            <ImgBlock href="http://consolut.ru/"
                      title="Таможенный брокер в Москве"
                      img="../../static/img/sixth-site-img.jpg" />
            <ImgBlock href="http://apb1.ru/"
                      title="Архитектурно-проектное бюро №1"
                      img="../../static/img/seventh-site-img.jpg" />
            <ImgBlock href="http://maslostar.ru"
                      title="Поставки и внедрение промышленных смазочных материалов"
                      img="../../static/img/eighth-site-img.jpg" />
          </div>
        </div>
      </ContentBox>
    </div>
  </div>
);

export default Works;
