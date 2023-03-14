import React from 'react';
import Link from 'next/link';

import OurTeam from './OurTeam/OurTeam';

const ourTeams = [
	{
		title: 'RESEARCH',
		image: '/images/careers/team1.png',
		text:
			'Our teams work on cut- ting-edge computer science, neuroscience, ethics, and public policy to responsibly pioneer AI systems. Research scientists and engineers collaborate across Intelsense AI and with partners to create systems that can benefit all parts of society.',
	},
	{
		title: 'DESIGN',
		image: '/images/careers/team2.png',
		text:
			'Our teams work on cut- ting-edge computer science, neuroscience, ethics, and public policy to responsibly pioneer AI systems. Research scientists and engineers collaborate across Intelsense AI and with partners to create systems that can benefit all parts of society.',
	},
	{
		title: 'ENGINEERING',
		image: '/images/careers/team3.png',
		text:
			'Our teams work on cut- ting-edge computer science, neuroscience, ethics, and public policy to responsibly pioneer AI systems. Research scientists and engineers collaborate across Intelsense AI and with partners to create systems that can benefit all parts of society.',
	},
	{
		title: 'OPERATIONS',
		image: '/images/careers/team4.png',
		text:
			'Our teams work on cut- ting-edge computer science, neuroscience, ethics, and public policy to responsibly pioneer AI systems. Research scientists and engineers collaborate across Intelsense AI and with partners to create systems that can benefit all parts of society.',
	},
	{
		title: 'BUSINESS',
		image: '/images/careers/team5.png',
		text:
			'Our teams work on cut- ting-edge computer science, neuroscience, ethics, and public policy to responsibly pioneer AI systems. Research scientists and engineers collaborate across Intelsense AI and with partners to create systems that can benefit all parts of society.',
	},
];

const Career = () => {
	return (
		<div className='careers'>
			<section className='careers__header'>
				<div className='careers__header--text'>
					<p className='careers__header--leaders'>
						WE ARE LOOKING FOR EMOTIONAL LEADERS
					</p>
					<h3>
						“As more and more artificial intelligence <br /> is entering into
						the world, <br /> more and more emotional intelligence <br /> must
						enter into leadership."
					</h3>

					<div className='careers__header--bottom'>
						<p>Amit Ray,</p>
						<p>Famous AI Scientist,</p>
						<p>Author of Compassionate Artificial Intelligence</p>
					</div>
				</div>
			</section>

			<section className='careers__sense__future'>
				<div className='careers__sense__future--section'>
					<div className='careers__sense__future--section-content'>
						<h1>SENSE YOUR FUTURE!</h1>
						<p>
							Intelsense is looking for world-class talent ready to tackle
							challenging projects that will expand the boundary of Artificial
							Inteligence.
						</p>
					</div>

					<div className='careers__sense__future--section-content'>
						<h1>MAKE AN IMPACT!</h1>
						<p>
							Everyday, People of Team Intelsense work on products and research
							projects with the potential to notably impact our our future and
							to build a better world. Our team members take immense pride in
							solving complex but humane problems that can have tangible impacts
							on every industry that affects our life.
						</p>
					</div>

					<Link href='/' className='careers__sense__future--section-btn'>
						Learn More
					</Link>
				</div>
			</section>

			<section className='careers__mission'>
				<div className='careers__mission--our-mission'>
					<div className='careers__mission--our-mission-line1'/>
					<h1>Our Mission</h1>
					<div className='careers__mission--our-mission-line'></div>
					<div className='careers__mission--our-mission-content'>
						<p>
							Intelsense AI building a world class team of AI Researchers, Data
							Scientists, Machine Learning Engineers, Software Engineers,
							Product Managers, and Visionaries to help realize this potential,
							pushing the boundaries of what AI can do, and advancing the state
							of the art in AI.
						</p>
					</div>
					<div className='careers__mission--our-mission-line'></div>
				</div>

				<div className='careers__mission--join-our-mission'>
					<h4>JOIN OUR MISSION</h4>
					<div className='careers__mission--join-our-mission-content'>
						<h2>
							We are challengeing every convention of life <br /> with the power
							of AI- You can be a challenger too!
						</h2>
					</div>

					<Link href='/' className='careers__mission--join-our-mission-btn'>
						Search Open Roles
					</Link>
				</div>
			</section>

			<section className='careers__our--teams'>
				<div className='careers__our--teams-content'>
					<div className='careers__our--teams-content-line'></div>

					<div className='careers__our--teams-content--upper'>
						<h1>OUR TEAMS:</h1>
						<p>
							Our success depends on many teams joining together for a shared
							goal. No single discipline has all the answers needed to build AI,
							<br />
							and we've found that many exciting new ideas come from dedicated
							collaboration between different fields.
							<br />
							Learn more about our dedicated teams and people below.
						</p>
					</div>
					<div className='careers__our--teams--bottom'>
						{ourTeams.map((ourTeam, i) => (
							<OurTeam ourTeam={ourTeam} key={i} />
						))}
					</div>

					<div className='careers__our--teams-content-line'></div>
				</div>
			</section>

			<section className='careers__internship'>
				<div className='careers__internship--content'>
					<h1>INTERNSHIPS</h1>
					<div className='careers__internship--content-upper'>
						<p>
							Internships at Intelsense AI offers an young mind proper exposure,
							networking and working opportunities with some of the <br />{' '}
							brightest minds in the field of AI. The company’s focus on
							business revolution with social goods is a perfect structure to
							grow <br /> as an academic, a technical expert and as an
							individual.
						</p>
						<p>
							We offer hands-on experience working collaboratively on projects
							that push the frontiers of AI and science.
						</p>
					</div>

					<div className='careers__internship--content-bottom'>
						<p>
							<span>Research Interns</span> work closely with our research
							scientists on projects relating to ongoing topics and current
							goals within our research teams. Internships with our Science team
							are also open to those study- ing a range of natural sciences,
							including physics, chemistry and biology
						</p>
						<p>
							<span>Engineering Internships</span> are open to current degree
							students at any level (bachelors, masters, doctorate) in a
							technical sub- ject (computer science, engineering, maths,
							physics, etc), who have some practical software engineering and
							machine learning experience. We also offer internships across a
							number of our teams, including Design, Operations and Business.
						</p>
					</div>
				</div>
				<Link href='/' className='careers__internship-link'>
					Search Opportunities
				</Link>
			</section>

			<section className='careers__tours'>
				<div className='careers__tours--content'>
					<div className='careers__tours--content-upper'>
						<h3>
							“I think AI is coming about and replacing routine jobs is pushing
							us to do what we should be doing anyway: the creation of more
							humanistic service jobs.”
						</h3>

						<p>DR. KAI-FU LEE,</p>
						<p>CHAIRMAN AND CEO OF SINOVATION VENTURES</p>
					</div>

					<div className='careers__tours--content-bottom'>
						<h3>WANT TO TAKE A TOUR WITH INTELSENSE AI?</h3>
						<p>
							We arrange a tri-monthly trip in the company to share our ideas,
							workflow and office environment with bright young minds
						</p>
						<Link href='/' className='careers__tours--content-bottom-link'>
							Book Your Place
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Career;
