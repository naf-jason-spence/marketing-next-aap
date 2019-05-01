import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
    <style jsx>{`
            h1, p {
                font-family: 'Arial';
            }
            h1 {
              border-bottom: 1px solid #ddd;
              padding-bottom: .5rem;
            }
            p {
              font-size: 1rem;
              line-height: 1.4;
              margin-bottom: 1.5rem;
            }
        `}</style>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post