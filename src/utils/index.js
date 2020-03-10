import moment from "moment";

export function abbreviateNumber(num) {
  if (!num) {
    return "-";
  } else if (num >= 1000 && num < 1000000) {
    return `${Number((num / 1000).toFixed(1))}k`;
  } else if (num >= 1000000 && num < 1000000000) {
    return `${Number((num / 1000000).toFixed(1))}m`;
  } else if (num >= 1000000000 && num < 1000000000000) {
    return `${Number((num / 1000000000).toFixed(1))}b`;
  } else if (num >= 1000000000000) {
    return `${Number((num / 1000000000000).toFixed(1))}t`;
  }

  return num.toFixed(0);
}

export function getPercentage(valueIf, valueThen) {
  return Number(valueThen * 100 / valueIf);
}

export function toPercentage(num) {
  return Number((num * 100).toFixed(1));
}

export function percentageToColor(percentage) {
  let r = 0;
  let g = 0;
  let b = 0;

  if (percentage < 50) {
    r = 255;
    g = Math.round(5.1 * percentage);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * percentage);
  }
  const h = r * 0x10000 + g * 0x100 + b * 0x1;
  return "#" + ("000000" + h.toString(16)).slice(-6);
}

export function decimalToCount(decimal, matchTotal) {
  if (decimal > 0) {
    const count = decimal * matchTotal;
    return abbreviateNumber(Math.floor(count));
  }
  return 0;
}

export const sum = (a, b) => a + b;

export function getMinutesSecondsString(duration) {
  let time;
  const d = moment.duration(duration * 1000);
  const h = d.hours();
  const m = d.minutes();
  const s = d.seconds();

  if (h > 0) {
    time = h * 60 + m;
  } else {
    time = m;
  }

  if (s < 10) {
    time += ":0" + s;
  } else {
    time += ":" + s;
  }

  return time;
}

const tiers = {
  "rank_tier_0": "Uncalibrated",
  "rank_tier_1": "Herald",
  "rank_tier_2": "Guardian",
  "rank_tier_3": "Crusader",
  "rank_tier_4": "Archon",
  "rank_tier_5": "Legend",
  "rank_tier_6": "Ancient",
  "rank_tier_7": "Divine",
  "rank_tier_8": "Immortal",
};

export function rankTierToString(rankTier) {
  if (rankTier !== parseInt(rankTier, 10)) {
    return "Unknown";
  }
  const intRankTier = parseInt(rankTier, 10);
  let rank = tiers[`rank_tier_${parseInt(intRankTier / 10, 10)}`];
  if (intRankTier > 9 && intRankTier !== 80) {
    rank += ` [${parseInt(intRankTier % 10, 10)}]`;
  }
  return rank;
}


export const getOrdinal = (n) => {
  // TODO localize
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
