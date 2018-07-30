import Link from 'next/link';
import './Preview.scss';

const Preview = () => (
  <div className="preview">
    <div className="preview__text">
      <Link href="/service">
        <a className="preview__link">ДЕЛАЕМ</a>
      </Link>
      {' '}И{' '}
      <Link href="/promotion">
        <a className="preview__link">РАЗВИВАЕМ</a>
      </Link>
      <br />ХОРОШИЕ САЙТЫ
    </div>
  </div>
);

export default Preview;
