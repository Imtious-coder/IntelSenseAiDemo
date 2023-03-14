import React, { Fragment, useState } from "react";
import Link from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import { FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const styles = {
  paper: {
    width: "70vw",
    height: "auto",
    top: "60px",
    padding: "2em 10vw 0 7.5vw",
  },
  item: {
    fontSize: "1.2em",
    fontWeight: "bold",
    lineHeight: "1.5em",
    textDecoration: "none",
    fontFamily: "'Open Sans', sans-serif",
  },
  itemLink: {
    color: "#000",
    margin: "0.8rem 0",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuIcon: {
    fontSize: "2.5em",
  },
  empty: {
    width: "2.5em",
  },
  logLink: {
    margin: "auto",
  },
  logo: {
    width: "13.5em",
  },
  logo2: {
    width: "13em",
    marginBottom: "1.9rem",
    marginTop: "1.9rem",
  },
  link: {
    textDecoration: "none",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    color: "#6CC5ED",
    margin: "20px 0",
  },
  icon: {
    marginRight: "2em",
  },
  border: {
    borderBottom: "1px solid #C4C1C1",
  },
};

const items = [
  // { title: "AI Solutions+", dest: "/" },
  // { title: "Technologies", dest: "/" },
  { title: "Products", dest: "/products" },
  // { title: "Research", dest: "/" },
  { title: "Investor relation", dest: "/investorRelation" },
  { title: "Blog", dest: "/blog" },
  // { title: "Case Studies", dest: "/case-studies" },
  { title: "Careers", dest: "/careers" },
  { title: "Contact", dest: "/contact" },
  { title: "About Us", dest: "/about-us" },
];

export default function TemporaryDrawer() {
  const classes = styles;
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <div style={classes.topBar}>
          <div style={classes.empty} />
          <Link href="/" style={classes.logLink}>
            <img
              src="/images/logo.svg"
              alt="intelsense logo"
              style={classes.logo}
            />
          </Link>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon style={classes.menuIcon} />
          </Button>
        </div>

        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          <div
            style={classes.paper}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Link href="/" style={classes.logLink}>
              <img
                src="/images/logo.svg"
                alt="intelsense logo"
                style={classes.logo2}
              />
            </Link>
            <div style={classes.border} />

            {items.map((item, index) => (
              <Fragment key={item.title}>
                <div style={classes.item}>
                  <Link href={item.dest} style={{ textDecoration: "none" }}>
                    <div style={classes.itemLink}>{item.title}</div>
                  </Link>
                </div>
                <div style={classes.border} />
              </Fragment>
            ))}

            <div style={classes.icons}>
              <div style={classes.icon}>
                <FaFacebookF size={20} />
              </div>
              <div style={classes.icon}>
                <FaYoutube size={20} />
              </div>
              <div style={classes.icon}>
                <FaLinkedinIn size={20} />
              </div>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </React.Fragment>
  );
}
