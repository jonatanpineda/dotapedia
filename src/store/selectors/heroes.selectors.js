import { createSelector } from "reselect";
import { abbreviateNumber, sum } from "../../utils";

const matchCountByRank = (heroes, rank) =>
  heroes.map(heroStat => heroStat[rank] || 0).reduce(sum, 0) / 10;

export const getHeroes = state => state.heroes;

export const getMatchCountPro = createSelector(getHeroes, heroes => {
  return heroes.map(heroStat => heroStat.proPick || 0).reduce(sum, 0) / 10;
});

export const getMatchCountProString = createSelector(
  getMatchCountPro,
  matchCountPro => abbreviateNumber(matchCountPro)
);

export const getMatchCount8 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "8Pick");
});

export const getMatchCount7 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "7Pick");
});

export const getMatchCount6 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "6Pick");
});

export const getMatchCount5 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "5Pick");
});

export const getMatchCount4 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "4Pick");
});

export const getMatchCount3 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "3Pick");
});

export const getMatchCount2 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "2Pick");
});

export const getMatchCount1 = createSelector(getHeroes, heroes => {
  return matchCountByRank(heroes, "1Pick");
});

export const getMatchCountPublic = createSelector(
  getMatchCount8,
  getMatchCount7,
  getMatchCount6,
  getMatchCount5,
  getMatchCount4,
  getMatchCount3,
  getMatchCount2,
  getMatchCount1,
  (
    matchCount8,
    matchCount7,
    matchCount6,
    matchCount5,
    matchCount4,
    matchCount3,
    matchCount2,
    matchCount1
  ) => {
    return (
      matchCount8 +
      matchCount7 +
      matchCount6 +
      matchCount5 +
      matchCount4 +
      matchCount3 +
      matchCount2 +
      matchCount1
    );
  }
);

export const getMatchCountPublicString = createSelector(
  getMatchCountPublic,
  matchCountPublic => abbreviateNumber(matchCountPublic)
);

export const getHeroesCalculated = createSelector(
  getHeroes,
  getMatchCountPro,
  getMatchCount8,
  getMatchCount7,
  getMatchCount6,
  getMatchCount5,
  getMatchCount4,
  getMatchCount3,
  getMatchCount2,
  getMatchCount1,

  (
    heroes,
    matchCountPro,
    matchCount8,
    matchCount7,
    matchCount6,
    matchCount5,
    matchCount4,
    matchCount3,
    matchCount2,
    matchCount1
  ) => {
    const processedData = heroes.map(heroStat => {
      const pickRatePro = (heroStat.proPick || 0) / matchCountPro;
      const banRatePro = (heroStat.proBan || 0) / matchCountPro;
      return {
        ...heroStat,
        hero_id: heroStat.id,
        // heroName: (heroes[heroStat.id] && heroes[heroStat.id].localizedName) || "",
        matchCountPro,
        matchCount8,
        matchCount7,
        matchCount6,
        matchCount5,
        matchCount4,
        matchCount3,
        matchCount2,
        matchCount1,
        pickBanRatePro: pickRatePro + banRatePro,
        pickRatePro,
        banRatePro,
        winRatePro: (heroStat.proWin || 0) / heroStat.proPick,
        pickRate8: (heroStat["8Pick"] || 0) / matchCount8,
        pickRate7: (heroStat["7Pick"] || 0) / matchCount7,
        pickRate6: (heroStat["6Pick"] || 0) / matchCount6,
        pickRate5: (heroStat["5Pick"] || 0) / matchCount5,
        pickRate4: (heroStat["4Pick"] || 0) / matchCount4,
        pickRate3: (heroStat["3Pick"] || 0) / matchCount3,
        pickRate2: (heroStat["2Pick"] || 0) / matchCount2,
        pickRate1: (heroStat["1Pick"] || 0) / matchCount1,
        winRate8: (heroStat["8Win"] || 0) / heroStat["8Pick"],
        winRate7: (heroStat["7Win"] || 0) / heroStat["7Pick"],
        winRate6: (heroStat["6Win"] || 0) / heroStat["6Pick"],
        winRate5: (heroStat["5Win"] || 0) / heroStat["5Pick"],
        winRate4: (heroStat["4Win"] || 0) / heroStat["4Pick"],
        winRate3: (heroStat["3Win"] || 0) / heroStat["3Pick"],
        winRate2: (heroStat["2Win"] || 0) / heroStat["2Pick"],
        winRate1: (heroStat["1Win"] || 0) / heroStat["1Pick"]
      };
    });

    processedData.sort(
      (a, b) =>
        a.localizedName && a.localizedName.localeCompare(b.localizedName)
    );

    return processedData;
  }
);
