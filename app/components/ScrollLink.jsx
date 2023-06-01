import React, { useEffect } from "react";

function ScrollLink({ href, children, onClick }) {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });

      if (onClick) {
        onClick();
      }
    };

    const link = document.querySelector(`a[href="${href}"]`);
    link.addEventListener("click", handleClick);

    return () => {
      link.removeEventListener("click", handleClick);
    };
  }, [href, onClick]);

  return (
    <a href={href} className="hover:font-semibold duration-75">
      {children}
    </a>
  );
}

export default ScrollLink;
