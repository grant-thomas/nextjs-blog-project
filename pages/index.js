import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featuredposts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from './../lib/posts-util';

function HomePage(props) {
	const featuredPosts = props.posts;

	return (
		<>
			<Head>
				<title>Grant's Blog</title>
				<meta
					name='description'
					content='I post about programming and web development'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={featuredPosts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return { props: { posts: featuredPosts }, revalidate: 1800 };
}

export default HomePage;
