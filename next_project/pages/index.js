// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
//
// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.title}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
//
// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink id="hello-nextjs" title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const aStyle = {
  fontFamily: "Arial",
  textDecoration: "none",
  color: "blue"
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a style={aStyle}>{post.title}</a>
    </Link>
    <style jsx>
    {`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a:hover {
        opacity: 0.6;
      }
    `}
    </style>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)
