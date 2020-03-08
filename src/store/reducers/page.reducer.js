const components = {
  HOME: "Home",
  HEROES: "Heroes",
  MATCHES: "Matches",
  TEAMS: "Teams",
  DISTRIBUTIONS: "Distributions",
  NOT_FOUND: "NotFound"
};

export default (state = "", action = {}) => components[action.type] || state;
