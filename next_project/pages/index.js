import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import ContentBox from '../components/ContentBox';
import '../scss/style.scss';

const Index = () => (
  <div className="page">
    <Head>
      <title>Разработка и развитие сайтов | Digital heroes club</title>
    </Head>
    <Header />
    <ContentBox leftMenu="padding-top" footer_padding={false}>
      <div className="content">
        <div className="row row_img-alignment">
          <div className="row__block row__text-block row__block_margin-10">
            <p>
              <span>Помогаем </span>
              компаниям продавать товары и услуги в
              интернете, сохранять и повышать позиции в поисковой
              выдаче, постоянно развивая их сайты
            </p>
          </div>
          <div className="row__block row__block_margin-10">
            <Link href="http://m-kran.ru/">
              <a title="Аренда кранов Liebherr" target="_blank">
                <div className="row__block-background">
                  <p>Аренда кранов Liebherr</p>
                </div>
                <img src="../../static/img/first-site-img.jpg" />
              </a>
            </Link>
          </div>
          <div className="row__block row__block_margin-10">
            <Link href="https://iamrealtor.ru/">
              <a title="Первый онлайн сервис по юридической проверке недвижимости перед покупкой" target="_blank">
                <div className="row__block-background">
                  <p>Первый онлайн сервис по юридической проверке недвижимости перед покупкой</p>
                </div>
                <img src="../../static/img/second-site-img.jpg" />
              </a>
            </Link>
          </div>
        </div>
        <div className="row row_img-alignment row_last">
          <div className="row__block row__block_margin-10">
            <Link href="http://spektra.ru/">
              <a title="Разработка проектов перепланировки жилых и нежилых помещений" target="_blank">
                <div className="row__block-background">
                  <p>Разработка проектов перепланировки жилых и нежилых помещений</p>
                </div>
                <img src="../../static/img/third-site-img.jpg" />
              </a>
            </Link>
          </div>
          <div className="row__block row__block_margin-10">
          <Link href="https://refurni.ru/">
            <a title="Дизайнерская мебель в наличии и на заказ" target="_blank">
              <div className="row__block-background">
                <p>Дизайнерская мебель в наличии и на заказ</p>
              </div>
              <img src="../../static/img/fourth-site-img.jpg" />
            </a>
          </Link>
          </div>
          <div className="row__block row__block_margin-10">
          <Link href="http://gsps.ru/">
            <a title="Городская служба перепланировок и согласований" target="_blank">
              <div className="row__block-background">
                <p>Городская служба перепланировок и согласований</p>
              </div>
              <img src="../../static/img/fifth-site-img.jpg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    </ContentBox>
  </div>
);

export default Index;
