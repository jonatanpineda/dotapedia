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

export function percent(num) {
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
