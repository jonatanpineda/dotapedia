import React from "react";
import Table from "./Table";
import { connect } from "react-redux";
import moment from "moment";
import { MATCHES_PRO } from "../store/actions/matchesPro.actions";
import { GiTrophyCup } from "react-icons/gi";
import { getMinutesSecondsString } from "../utils";

const columns = [
  {
    title: "ID",
    renderItem: ({ matchId, leagueName, startTime, duration }) => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className="text-sm leading-5 font-medium text-blue-400">
            {matchId}
          </div>
          <div className="text-sm leading-5 text-gray-500">
            {moment
              .utc(new Date((startTime + duration) * 1000))
              .from(new Date())}
            /{leagueName}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "DURATION",
    renderItem: ({ duration }) => (
      <div className="flex items-center">
        <div className="text-gray-500">{getMinutesSecondsString(duration)}</div>
      </div>
    )
  },
  {
    title: "RADIANT",
    renderItem: ({ radiantName, radiantWin }) => (
      <div className="flex items-center">
        {radiantWin ? <GiTrophyCup className="mr-2" color="yellow" /> : null}
        <div className="text-green-500">{radiantName}</div>
      </div>
    )
  },
  {
    title: "DIRE",
    renderItem: ({ direName, radiantWin }) => (
      <div className="flex items-center">
        {!radiantWin ? <GiTrophyCup className="mr-2" color="yellow" /> : null}
        <div className="text-red-500">{direName}</div>
      </div>
    )
  }
];

function MatchesPro({ matchesPro, loading }) {
  return (
    <div>
      <div className="flex flex-col m-6">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-800">
            <Table
              columns={columns}
              data={matchesPro}
              keyId="matchId"
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  matchesPro: state.matchesPro,
  loading: state.network[MATCHES_PRO]
}))(MatchesPro);
