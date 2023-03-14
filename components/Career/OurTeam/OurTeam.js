import React from 'react';
import Link from 'next/link';



const OurTeams = ({ ourTeam }) => {
	return (
		<div className='careers__our--teams--bottom-content'>
			<h2>{ourTeam.title}</h2>
			<div className='careers__our--teams--bottom-content-img'>
				<img src={ourTeam.image} alt={ourTeam.title} />
				<p>{ourTeam.text}</p>
			</div>

			<div className='careers__our--teams--bottom-content-links'>
				<Link href='/'>See Details</Link>
				<Link href='/'>Search Roles</Link>
			</div>
		</div>
	);
};

export default OurTeams;
