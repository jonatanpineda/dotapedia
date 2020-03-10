import { createSelector } from "reselect";

export const getTeams = state => state.teams;

export const getFirstOneHundredTeams = createSelector(getTeams, teams => {
  return teams
    .filter(
      team => team.lastMatchTime > new Date() / 1000 - 60 * 60 * 24 * 30 * 6
    )
    .slice(0, 100);
});

export const getFirstOneHundredTeamsRatingsWinsLosses = createSelector(
  getFirstOneHundredTeams,
  teams => {
    return teams.reduce(
      (acc, t) => {
        acc.ratings.push(t.rating);
        acc.wins.push(t.wins);
        acc.losses.push(t.losses);

        return acc;
      },
      { ratings: [], wins: [], losses: [] }
    );
  }
);

export const getFirstOneHundredTeamsMaxRating = createSelector(
  getFirstOneHundredTeamsRatingsWinsLosses,
  ({ ratings }) => Math.max(...ratings)
);

export const getFirstOneHundredTeamsMaxWins = createSelector(
  getFirstOneHundredTeamsRatingsWinsLosses,
  ({ wins }) => Math.max(...wins)
);

export const getFirstOneHundredTeamsMaxLosses = createSelector(
  getFirstOneHundredTeamsRatingsWinsLosses,
  ({ losses }) => Math.max(...losses)
);
