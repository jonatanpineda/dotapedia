import React from "react";
import Spinner from "react-spinkit";

function withLoadingIndicator(Component) {
  return function({ loading, ...props }) {
    if (!loading) {
      return <Component {...props} />;
    }

    return (
      <Spinner
        className="m-auto"
        fadeIn="none"
        name="cube-grid"
        color="white"
      />
    );
  };
}

export default withLoadingIndicator;
