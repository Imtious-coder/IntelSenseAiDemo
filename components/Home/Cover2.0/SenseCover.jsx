import { Button, makeStyles, Link } from "@material-ui/core";
import { Launch } from "@material-ui/icons";
import Styles from "./intelsenseai.module.scss";

import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),  
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row-reverse",
      padding: theme.spacing(8),
      justifyContent: 'space-between',
      alignItems: "center",
    },
    zIndex: 1,
    position: "relative",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  },
  button: {
    fontSize: 12,
    margin: "1rem 0rem",
    textTransform: "none",
    background: "#0099dc",
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },

    "& a": {
      color: "white",
    },

    "&:hover": {
      background: "white",
      color: "black",

      "& a": {
        color: "black",
      },
    },
  },
  h1: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    fontFamily: "Kumbh Sans",
    marginTop: "4rem",
    marginBottom: "1rem",
    lineHeight: 1.4,

    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
    },

    "& strong": {
      background: "white",
      borderRadius: "0.5rem",
      color: "#0099dc",
      padding: "0.5rem 0.5rem",
      paddingTop: "1rem",
      boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
      whiteSpace: "nowrap",
    },
  },
  h2: {
    margin: "2rem 0rem",
    fontSize: "1.8rem",
    fontWeight: "400",
    textAlign: "justify",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
      textAlign: "none",
    },
  },
  infoWrapper: {
    maxWidth: 600,
    fontWeight: 600,
    // margin: "1rem",
    [theme.breakpoints.up("md")]: {
      // marginRight: "2rem",
    },
  },
  videoContainer : {
    width: '100%',
    height: 'auto',
    background: "black"
  },
  videoWrapper : {
    width: '100%',
    [theme.breakpoints.up("xs")]: {
      width: '300px',
      marginLeft: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      width: '600px',
    },
    [theme.breakpoints.up("md")]: {
      width: '600px',
      marginLeft: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: '800px',
    
    },
    [theme.breakpoints.up("xl")]: {
      width: '800px',
    },
    height: 'auto',
    background: "black",
    
    boxShadow: "0px 0px 1rem rgba(0,0,0,0.3)",
  }
}));

export default function SenseCover() {
  const classes = useStyles();

  return (
    <div className={Styles.hero}>
      {/* HERO TOP */}
        <div className={` ${Styles.hero_row} row m-0 p-0 w-100`}>
          <div className={`col-12 col-md-7 m-auto`}>
            <div className={Styles.hero_info}>
            <p className={Styles.hero_heading}>Advancing the Effectiveness of Businesses</p>
            <p className={Styles.hero_details}>AI-Powered Voice Processing, Language Processing, Image Processing and Sentiment Analysis enabling companies to know customers better and provide the best possible services to them.</p>
            <button className={Styles.hero_btn}>Let's Talk</button>
            </div>
          </div>
          <div className="col-md-5 m-0 p-0">
            <img className={Styles.hero_img} src="/images/hero_img1.png" alt="" />
          </div>
        </div>
        {/* VIDEO */}
        <div className={Styles.hero_video_container}>
            <video className={Styles.hero_video} autoPlay muted controls>
              <source
                src="/video/intro.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
    // <div className={classes.root}>
    //   <div className={classes.videoWrapper}>
    //     <video className={classes.videoContainer} autoPlay muted controls>
    //       <source
    //         src="/video/intro.mp4"
    //         type="video/mp4"
    //       />
    //     </video>
    //   </div>

    //   <div className={classes.infoWrapper}>
    //     <h1 className={classes.h1}>
    //       Advancing <strong>the Effectiveness</strong> of Businesses
    //     </h1>
    //     <h2 className={classes.h2}>
    //       AI-Powered Voice Processing, Language Processing, Image Processing and
    //       Sentiment Analysis enabling companies to know customers better and
    //       provide the best possible services to them.
    //     </h2>
    //     <Button
    //       variant="contained"
    //       className={classes.button}
    //       endIcon={<Launch />}
    //       color="primary"
    //     >
    //       <Link target="_blank" rel="noopener" href="/trydemo">
    //         Try it for free
    //       </Link>
    //     </Button>
    //   </div>
    // </div>
  );
}
