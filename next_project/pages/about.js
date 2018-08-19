import Head from 'next/head';
import HeadMenu from '../components/Header/HeadMenu';
import ContentBox from '../components/ContentBox';
import Footer from '../components/Footer';
import '../scss/style.scss';

function TextBlock(props){
  return (
    <div className="content__block content__block_margin-10">
      <h3>{props.header}</h3>
      <p>
        {props.children}
      </p>
    </div>
  );
};

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
            <div className="content__blocks-wrapper">
              <TextBlock header="Проектирование">
                Перед началом работ по разработке, поисковому продвижению и запуску рекламной кампании
                необходимо проработать максимум деталей.
              </TextBlock>

              <TextBlock header="Дизайн">
                Взаимодействие пользователя с сайтом, удобство интерфейса, воронка продаж, стратегия
                продвижения и наконец графическое оформление.
              </TextBlock>

              <TextBlock header="Разработка">
                Ruby on Rails — наша основная платформа, что позволяет применять современные методы
                разработки, а Drupal рекомендуем для типовых сайтов.
              </TextBlock>

              <TextBlock header="Реклама">
                Привлечение и возвращение клиентов как при запуске проекта, так и в процессе его
                поискового продвижения.
              </TextBlock>

              <TextBlock header="Продвижение">
                Независимо от существующих оборотов при грамотном построении стратегии продвижения
                мы можем увеличить количество новых клиентов.
              </TextBlock>

              <TextBlock header="Развитие">
                Мы берём на себя обслуживание проектов на разных стадиях готовности, связывая
                техническую поддержку и развитие в единый гармоничный узел.
              </TextBlock>
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  </div>
);

export default About;
