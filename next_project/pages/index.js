import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import ContentBox from '../components/ContentBox';
import ImgBlock from '../components/ImgBlock';
import '../scss/style.scss';

const Index = () => (
  <div className="page">
    <Head>
      <title>Разработка и развитие сайтов | Digital heroes club</title>
    </Head>
    <Header />
    <ContentBox leftMenu="padding-top" footer_padding={false}>
      <div className="content">
        <div className="content__blocks-wrapper content_alignment">
          <div className="content__block content__text-block content__block_margin-10">
            <p>
              <span>Помогаем </span>
              компаниям продавать товары и услуги в
              интернете, сохранять и повышать позиции в поисковой
              выдаче, постоянно развивая их сайты
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
        </div>
      </div>
    </ContentBox>
  </div>
);

export default Index;
