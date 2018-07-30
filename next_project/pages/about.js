import Head from 'next/head';
import HeadMenu from '../components/Header/HeadMenu';
import ContentBox from '../components/ContentBox';
import Footer from '../components/Footer';
import '../scss/style.scss';

const About = () => (
  <div>
    <Head>
      <title>О Нас | Разработка и развитие сайтов</title>
    </Head>
    <div className="page">
      <div className="header-wrapper">
        <div className="header">
          <HeadMenu home_link={true} />
        </div>
      </div>
      <ContentBox footer_padding={true}>
        <div className="content content__about content_padding-left-right-40">
          <div className="content__about-header">
            <h1>О нас</h1>
            <p>
                Запускаем сайты на фреймворке Ruby on Rails или системе управления Drupal.
            </p>
            <p>
                Объединились в команду из двух разработчиков в 2014 году и приняли участие в
                работе над более чем 8 проектами с тех пор. С 2016 года к нашей команде постепенно
                присоединились программист PHP/Drupal, UI/UX дизайнер, SMM специалист и штатный копирайтер.
            </p>
            <p>
                Наши цели в 2018 году прокачать наш дизайн, от проектирования до продакшена. Больше
                погружаться в построение бизнес процессов и таким образом полноценно обеспечивать успешное
                развитие бизнеса наших клиентов в интернете.
            </p>
          </div>
          <div className="content__about-services">
            <h2>Услуги</h2>
            <div className="row">
              <div className="row__block row__block_margin-10">
                <h3>Проектирование</h3>
                <p>
                  Перед началом работ по разработке, поисковому продвижению и запуску рекламной кампании
                  необходимо проработать максимум деталей.
                </p>
              </div>
              <div className="row__block row__block_margin-10">
                <h3>Дизайн</h3>
                <p>
                  Взаимодействие пользователя с сайтом, удобство интерфейса, воронка продаж, стратегия
                  продвижения и наконец графическое оформление.
                </p>
              </div>
              <div className="row__block row__block_margin-10">
                <h3>Разработка</h3>
                <p>
                  Ruby on Rails — наша основная платформа, что позволяет применять современные методы
                  разработки, а Drupal рекомендуем для типовых сайтов.
                </p>
              </div>
            </div>
            <div className="row row_last">
              <div className="row__block row__block_margin-10">
                <h3>Реклама</h3>
                <p>
                  Привлечение и возвращение клиентов как при запуске проекта, так и в процессе его
                  поискового продвижения.
                </p>
              </div>
              <div className="row__block row__block_margin-10">
                <h3>Продвижение</h3>
                <p>
                  Независимо от существующих оборотов при грамотном построении стратегии продвижения
                  мы можем увеличить количество новых клиентов.
                </p>
              </div>
              <div className="row__block row__block_margin-10">
                <h3>Развитие</h3>
                <p>
                  Мы берём на себя обслуживание проектов на разных стадиях готовности, связывая
                  техническую поддержку и развитие в единый гармоничный узел.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  </div>
);

export default About;
