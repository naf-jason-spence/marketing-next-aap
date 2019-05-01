import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NextSeo from 'next-seo';

const Index = (props) => (
    <Layout>
        <NextSeo config={{
            title: 'Homepage',
            description: 'This is our test description for our homepage.',
        }} />
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: 'Arial';
            }
            ul {
                padding: 0;
            }
            li {
                list-style: none;
                margin: .5rem 0;
            }
            a {
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: .6;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index