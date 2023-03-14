import { Button, makeStyles, Paper } from "@material-ui/core";
import { Launch } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#fcfcfc",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      padding: theme.spacing(8),
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      padding: "2rem 15%",
    },
  },
  button: {
    fontSize: 12,
    margin: "1rem 0rem",
    textTransform: "none",
    background: "#0099dc",
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },

    "&:hover": {
      background: "white",
      color: "black",
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
      fontSize: "4rem",
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
    fontSize: "2rem",
    fontWeight: 600,
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  },
  infoWrapper: {},

  p: {
    fontSize: 16,
    lineHeight: 1.5,
  },

  imgWrapper: {
    width: "90%",
    marginRight: "2rem",
  },

  cardTitle: {
    "& h2": {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    padding: "1rem 0rem",
    display: "flex",

    [theme.breakpoints.down("md")]: {
      "& h2": {
        fontSize: "2rem",
        fontWeight: 700,
      },
    },

    "& img": {
      width: 50,
    },
  },

  cardWrapper: {
    border: "1px solid #ccc",
    padding: "2rem",
    borderRadius: 5,
    marginBottom: "2rem",

    "& img": {
      paddingRight: 10,
    },
  },

  bestprod: {
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    padding: 5,

    "& img": {
      paddingRight: "1rem",
    },
  },
}));

export default function OurTech() {
  const classes = useStyles();

  return (
    <Paper elevation={1}>
      <div className={classes.root}>
        <div className={classes.imgWrapper}>
          <Paper className={classes.bestprod} variant="outlined">
            <img class="mr-m-2" src="/images/radio.svg" />
            Delivering best products
          </Paper>
          <h1 className={classes.h1}>Powered by our own technologies</h1>
          <h2 className={classes.h2}>
            Our solutions are self-contained and cost-effective!
          </h2>
        </div>
        <div className={classes.infoWrapper}>
          <Paper variant="outlined" className={classes.cardWrapper}>
            <div className={classes.cardTitle}>
              <img src="/images/asr.svg" />
              <h2 className={classes.h2}>ASR Automatic Speech Recognition</h2>
            </div>
            <p className={classes.p}>
              Our AI-powered Automatic Speech Recognition (ASR) technology
              transcribes and analyzes conversation recordings and provides a
              set of tools enabling its management and analysis with additional
              functionalities, like voice biometry and intent recognition.
            </p>
          </Paper>

          <Paper variant="outlined" className={classes.cardWrapper}>
            <div className={classes.cardTitle}>
              <img src="/images/nlp.svg" />
              <h2 className={classes.h2}>NLP Natural Language Processing</h2>
            </div>
            <p className={classes.p}>
              Natural language processing helps computers communicate with
              humans in their own language and scales other language-related
              tasks. With our solution, it is possible for computers to read
              text, hear speech, interpret it and determine which parts are
              important.
            </p>
          </Paper>
        </div>
      </div>
    </Paper>
  );
}
