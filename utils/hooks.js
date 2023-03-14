import React, { useEffect, useState } from "react";
import { getNowUser } from "./api";

// export default function useAuth() {
//   const [login, setLogin] = React.useState(false);
//   const [user, setUser] = React.useState();

//   React.useEffect(() => {
//     const exist = localStorage.getItem(AUTH_KEY);
//     if (exist) {
//       isAuthenticated()
//         .then((res) => {
//           setLogin(true);
//           setUser(getNowUser());
//         })
//         .catch((e) => setLogin(false));
//     } else setLogin(false);
//   }, []);

//   return login && user ? { login, user } : null;
// }

export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  let observer = null;

  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
  }

  useEffect(() => {
    if (ref.current && observer) {
      // console.log(ref.current)
      observer.observe(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current]);

  return isIntersecting;
}
