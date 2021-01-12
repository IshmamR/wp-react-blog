import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import FirstPost from '../components/FirstPost';
import PostsContainer from '../components/PostsContainer';
import Subscribe from '../components/Subscribe';
import Author from '../components/Author';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div className="Home bg-gray-100">
			<Hero />

			{/* Container */}
			<div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
				<div className="mx-0 sm:mx-6">
					
					<Nav />
					
					<div className="PostCards bg-gray-100 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
						<FirstPost />
						<PostsContainer />
					</div>

					<Subscribe />
					<Author />

				</div>
			</div>
			{/* ___Container___ */}

			<Footer />

		</div>
	);
}

export default Home;
