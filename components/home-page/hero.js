import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/Grant.png'
					alt='An image showing Grant'
					width={300}
					height={300}
					responsive
				/>
			</div>
			<h1>Hi, I'm Grant</h1>
			<p>
				I blog about web development - especially front-end frameworks like
				React and NextJS.
			</p>
		</section>
	);
}

export default Hero;
