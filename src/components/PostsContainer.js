import React from 'react';
import OneThird from './OneThird';
import Half from './Half';
import TwoThird from './TwoThird';

const PostsContainer = () => {
	return (
		<div className="PostsContainer flex flex-wrap justify-between pt-12 -mx-6">
			<OneThird />
			<OneThird />
			<OneThird />
			<TwoThird />
			<OneThird />
			<Half />
			<Half />
			<OneThird />
			<TwoThird />
		</div>
	);
}

export default PostsContainer;
