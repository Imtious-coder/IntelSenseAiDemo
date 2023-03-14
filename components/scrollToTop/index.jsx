import React, { useEffect } from "react";
import { withRouter } from "next/link";

function ScrollToTop() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}

export default ScrollToTop;
