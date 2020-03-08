import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import matchPath from "rudy-match-path/dist";

function TabLink({ to, goTo, text, active, icon, path }) {
	const isActive = matchPath(path, active);
  
  return (
    <div className="flex -mb-px mr-8">
      <span
        onClick={goTo}
        className={classnames(
          {
            "text-blue-400 md:text-blue-400 border-b-2 border-blue-400": isActive,
            "text-white md:text-white border-b-2 border-transparent hover:opacity-100 md:hover:border-white": !isActive
          },
          "no-underline flex items-center py-4"
        )}
      >
        {icon} {text}
      </span>
    </div>
  );
}

export default connect(
  (state) => ({ path: state.location.pathname}),
  (dispatch, ownProps) => ({ goTo: () => dispatch(ownProps.to) })
)(TabLink);
