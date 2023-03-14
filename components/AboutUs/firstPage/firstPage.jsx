import React from 'react';
import ScrollToTop from '../../scrollToTop';
import Style from './firstPage.module.scss';

const FirstPage = () => {
	return (
		<div className={Style.content}>
			<ScrollToTop />
			<h1 className={Style.title}>
				Widening the boundary of Imagination <br /> Creating the outline of the
				future.
			</h1>
		</div>
	);
};

export default FirstPage;
