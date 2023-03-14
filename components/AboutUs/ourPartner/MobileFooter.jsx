import React, { Fragment } from 'react'
import Link from 'next/link'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = ({
	container: {
  	height: "auto",
  	top: "60px",
		padding: "2em 10vw 0 7.5vw",
	},
	item: {
		fontSize: "1.2em",
		fontWeight: "bold",
		lineHeight: "1.5em",
		textDecoration: "none",
		padding: "0.8rem 0",
	},
	itemLink: {
		color: "#6CC5ED"
	},
	topBar: {
		display: "flex",
		justifyContent: "space-between",
	},
	menuIcon: {
		fontSize: "2.5em"
	},
	empty: {
		width: "2.5em"
	},
	logLink: {
		margin: "auto",
	},
	logo: {
		width:"14.4em"
	},
	logo2: {
		width:"13em",
		marginBottom: "1.9rem"
	},
	link: {
		textDecoration: "none"
	},
	rowItems: {
		display: "flex",
		fontSize: ".9em",
		flexWrap: "wrap",
		margin: "1.9rem 0 1.5em 0",
		textTransform: "uppercase",
		textAlign: "center",
		color: "#6CC5ED",
	},
	rowItem: {
		margin: "0.4em"
	},
	border: {
		borderBottom: "1px solid #C4C1C1"
	}

});

const items = [
	{title: "AI Solutions+", dest:"/"},
	{title: "Technologies+", dest:"/"},
	{title: "Industries", dest:"/"},
	{title: "Research", dest:"/"},
	{title: "Blog", dest:"/blog"},
	{title: "Case Studies", dest:"/case-studies"},
	{title: "Careers", dest:"/careers"},
	{title: "Contact", dest:"/contact"},
	{title: "About Us", dest:"/about-us"},
]

const MobileFooter = () => {
	const classes = useStyles;
	return (
		<div style={classes.container}>
			<Link href='/' style={classes.logLink} >
				<img src="/images/logo.svg" alt="intelsense logo" style={classes.logo2} />
			</Link>
			
			<div style={classes.border} />

			{items.map((item, index) => (
				<Fragment key={item.title}>
					<div style={classes.item} >
						<Link href={item.dest} style={{textDecoration: "none"}}>
							<div style={classes.itemLink} >
								{item.title}
							</div>
						</Link>
					</div>
					<div style={classes.border} />
				</Fragment>
			))}

			<div style={classes.rowItems}>
				<div style={classes.rowItem} >press</div>
				<div style={classes.rowItem} >Terms and Conditions</div>
				<div style={classes.rowItem} >privacy policy</div>
				<div style={classes.rowItem} >intelsense limited</div>
			</div>

			<div style={{textAlign:'center', marginBottom: "2em", fontSize: ".9em"}}>
			© Made with love by INTELSENSE LIMITED	
			</div>

		</div>
	)
}

export default MobileFooter
