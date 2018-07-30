// import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeadMenu from '../components/Header/HeadMenu';
import ContentBox from '../components/ContentBox';
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
        <div className="row row_img-alignment">
          <div className="row__block row__block_margin-10">
            <h3>Наши <span>работы</span></h3>
            <p>
              Экспертиза команды позволяет запускать сайты, решающие бизнес-задачи для их владельцев
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
        <div className="row row_img-alignment">
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
        <div className="row row_img-alignment row_last">
          <div className="row__block row__block_margin-10">
            <Link href="http://consolut.ru/">
              <a title="Таможенный брокер в Москве" target="_blank">
                <div className="row__block-background">
                  <p>Таможенный брокер в Москве</p>
                </div>
                <img src="../../static/img/sixth-site-img.jpg" />
              </a>
            </Link>
          </div>
          <div className="row__block row__block_margin-10">
            <Link href="http://apb1.ru/">
              <a title="Архитектурно-проектное бюро №1" target="_blank">
                <div className="row__block-background">
                  <p>Архитектурно-проектное бюро №1</p>
                </div>
                <img src="../../static/img/seventh-site-img.jpg" />
              </a>
            </Link>
          </div>
          <div className="row__block row__block_margin-10">
            <Link href="http://maslostar.ru">
              <a title="Поставки и внедрение промышленных смазочных материалов" target="_blank">
                <div className="row__block-background">
                  <p>Поставки и внедрение промышленных смазочных материалов</p>
                </div>
                <img src="../../static/img/eighth-site-img.jpg" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      </ContentBox>
    </div>
  </div>
);

export default Works;
