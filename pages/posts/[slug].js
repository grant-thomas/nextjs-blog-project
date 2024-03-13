import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name='description' content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</>
	);
}

export function getStaticProps(context) {
	const slug = context.params.slug;

	const postData = getPostData(slug);

	return { props: { post: postData }, revalidate: 600 };
}

export function getStaticPaths(context) {
	const postFilenames = getPostsFiles();
	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default PostDetailPage;
