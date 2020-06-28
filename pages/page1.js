import Head from 'next/head';
import Link from 'next/link';
import Icon from '../static/icon.jpg';

function Page1() {
  return(
    <div>
      <Link href="/page2" passHref>
        <a>page2로 이동</a>
      </Link>
      <p>This is home page</p>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name='description' content='hello world'></meta>
      </Head>
      <style jsx>{`
        p { 
          color: blue;
          font-size: 18pt;
        }
      `}</style>
    </div>
  );
}
export default Page1;