import React from "react";

function VisibilityWrapper({ visibility, children }) {
  if (visibility) {
    return <></>;
  }

  return children;
}

export default VisibilityWrapper;
