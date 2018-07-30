import Head from 'next/head';
import Link from 'next/link';
import HeadMenu from '../components/Header/HeadMenu';
import ContentBox from '../components/ContentBox';
import '../scss/style.scss';

const Contacts = () => (
  <div>
    <Head>
      <title>Контакты | Разработка и развитие сайтов</title>
    </Head>
    <div className="page">
      <div className="header-wrapper">
        <div className="header">
          <HeadMenu home_link={true} />
        </div>
      </div>
      <ContentBox footer_padding={true}>
        <div className="content content__contacts content_padding-left-right-50">
          <h1>Контакты</h1>
          <p>+7 926 934 33 73</p>
          <Link href="mailto:info@digitalheroes.club">
            <a className="content__mail-link">
              info@digitalheroes.club
            </a>
          </Link>
        </div>
      </ContentBox>
    </div>
  </div>
);

export default Contacts;
