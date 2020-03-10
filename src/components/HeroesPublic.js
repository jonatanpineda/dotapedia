import React from "react";
import Table from "./Table";
import { connect } from "react-redux";
import PercentBar from "./PercentBar";
import { ODOTA_URL } from "../constants/urls";
import {
  getHeroesCalculated,
  getMatchCountPublicString
} from "../store/selectors/heroes.selectors";
import { decimalToCount, percent, percentageToColor } from "../utils";
import {HEROES} from "../store/actions/heroes.actions";

const columns = [
  {
    title: "HERO",
    renderItem: ({ localizedName, img }) => (
      <div className="flex items-center">
        <div className="h-18 w-12">
          <img src={`${ODOTA_URL}${img}`} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-sm leading-5 font-medium text-blue-400">
            {localizedName}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "IM P%",
    renderItem: ({ pickRate8, matchCount8 }) => (
      <PercentBar
        percent={percent(pickRate8)}
        value={decimalToCount(pickRate8, matchCount8)}
        color={percentageToColor(percent(pickRate8))}
      />
    )
  },
  {
    title: "IM W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate8)}
        value={decimalToCount(row.winRate8, row["8Pick"])}
        color={percentageToColor(percent(row.winRate8))}
      />
    )
  },
  {
    title: "DI P%",
    renderItem: ({ pickRate7, matchCount7 }) => (
      <PercentBar
        percent={percent(pickRate7)}
        value={decimalToCount(pickRate7, matchCount7)}
        color={percentageToColor(percent(pickRate7))}
      />
    )
  },
  {
    title: "DI W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate7)}
        value={decimalToCount(row.winRate7, row["7Pick"])}
        color={percentageToColor(percent(row.winRate7))}
      />
    )
  },
  {
    title: "AN P%",
    renderItem: ({ pickRate6, matchCount6 }) => (
      <PercentBar
        percent={percent(pickRate6)}
        value={decimalToCount(pickRate6, matchCount6)}
        color={percentageToColor(percent(pickRate6))}
      />
    )
  },
  {
    title: "AN W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate6)}
        value={decimalToCount(row.winRate6, row["6Pick"])}
        color={percentageToColor(percent(row.winRate6))}
      />
    )
  },
  {
    title: "LE P%",
    renderItem: ({ pickRate5, matchCount5 }) => (
      <PercentBar
        percent={percent(pickRate5)}
        value={decimalToCount(pickRate5, matchCount5)}
        color={percentageToColor(percent(pickRate5))}
      />
    )
  },
  {
    title: "LE W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate5)}
        value={decimalToCount(row.winRate5, row["5Pick"])}
        color={percentageToColor(percent(row.winRate5))}
      />
    )
  },
  {
    title: "AR P%",
    renderItem: ({ pickRate4, matchCount4 }) => (
      <PercentBar
        percent={percent(pickRate4)}
        value={decimalToCount(pickRate4, matchCount4)}
        color={percentageToColor(percent(pickRate4))}
      />
    )
  },
  {
    title: "AR W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate4)}
        value={decimalToCount(row.winRate4, row["4Pick"])}
        color={percentageToColor(percent(row.winRate4))}
      />
    )
  },
  {
    title: "CR P%",
    renderItem: ({ pickRate3, matchCount3 }) => (
      <PercentBar
        percent={percent(pickRate3)}
        value={decimalToCount(pickRate3, matchCount3)}
        color={percentageToColor(percent(pickRate3))}
      />
    )
  },
  {
    title: "CR W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate3)}
        value={decimalToCount(row.winRate3, row["3Pick"])}
        color={percentageToColor(percent(row.winRate3))}
      />
    )
  },
  {
    title: "GU P%",
    renderItem: ({ pickRate2, matchCount2 }) => (
      <PercentBar
        percent={percent(pickRate2)}
        value={decimalToCount(pickRate2, matchCount2)}
        color={percentageToColor(percent(pickRate2))}
      />
    )
  },
  {
    title: "GU W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate2)}
        value={decimalToCount(row.winRate2, row["2Pick"])}
        color={percentageToColor(percent(row.winRate2))}
      />
    )
  },
  {
    title: "HE P%",
    renderItem: ({ pickRate1, matchCount1 }) => (
      <PercentBar
        percent={percent(pickRate1)}
        value={decimalToCount(pickRate1, matchCount1)}
        color={percentageToColor(percent(pickRate1))}
      />
    )
  },
  {
    title: "HE W%",
    renderItem: row => (
      <PercentBar
        percent={percent(row.winRate1)}
        value={decimalToCount(row.winRate1, row["1Pick"])}
        color={percentageToColor(percent(row.winRate1))}
      />
    )
  }
];

function HeroesPublic({ heroes, matchCount, loading }) {
  return (
    <div>
      <div className="flex flex-col m-6">
        <div className="text-center text-white mb-5">
          Heroes in Public Matches (Sampled) {matchCount} matches in last 30
          days
        </div>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-2 lg:px2">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-800">
            <Table columns={columns} data={heroes} keyId="id" loading={loading}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  heroes: getHeroesCalculated(state),
  matchCount: getMatchCountPublicString(state),
  loading: state.network[HEROES]
}))(HeroesPublic);
