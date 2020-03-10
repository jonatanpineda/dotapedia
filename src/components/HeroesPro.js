import React from "react";
import Table from "./Table";
import PercentBar from "./PercentBar";
import { connect } from "react-redux";
import { ODOTA_URL } from "../constants/urls";
import {
  getHeroesCalculated,
  getMatchCountProString
} from "../store/selectors/heroes.selectors";
import { decimalToCount, toPercentage, percentageToColor } from "../utils";
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
    title: "PRO P+B%",
    renderItem: ({ pickBanRatePro, matchCountPro }) => (
      <PercentBar
        percent={toPercentage(pickBanRatePro)}
        value={decimalToCount(pickBanRatePro, matchCountPro)}
        color={percentageToColor(toPercentage(pickBanRatePro))}
      />
    )
  },
  {
    title: "PRO PICK%",
    renderItem: ({ pickRatePro, matchCountPro }) => (
      <PercentBar
        percent={toPercentage(pickRatePro)}
        value={decimalToCount(pickRatePro, matchCountPro)}
        color={percentageToColor(toPercentage(pickRatePro))}
      />
    )
  },
  {
    title: "PRO BAN%",
    renderItem: ({ banRatePro, matchCountPro }) => (
      <PercentBar
        percent={toPercentage(banRatePro)}
        value={decimalToCount(banRatePro, matchCountPro)}
        color={percentageToColor(toPercentage(banRatePro))}
      />
    )
  },
  {
    title: "PRO WIN%",
    renderItem: ({ winRatePro, proPick }) => (
      <PercentBar
        percent={toPercentage(winRatePro)}
        value={decimalToCount(winRatePro, proPick)}
        color={percentageToColor(toPercentage(winRatePro))}
      />
    )
  }
];

function HeroesPro({ heroes, matchCount, loading }) {
  return (
    <div>
      <div className="flex flex-col m-6">
        <div className="text-center text-white mb-5">
          Heroes in Professional Matches {matchCount} matches in last 30 days
        </div>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-800">
            <Table columns={columns} data={heroes} keyId="id" loading={loading}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  heroes: getHeroesCalculated(state),
  matchCount: getMatchCountProString(state),
  loading: state.network[HEROES]
}))(HeroesPro);
