import React from "react";
import { MATCHES_PUBLIC } from "../store/actions/matchesPublic.actions";
import { connect } from "react-redux";
import heroes from "dotaconstants/build/heroes.json";
import Table from "./Table";
import moment from "moment";
import { getMinutesSecondsString, rankTierToString } from "../utils";
import {ODOTA_URL} from "../constants/urls";

const columns = [
  {
    title: "ID",
    renderItem: ({ matchId, avgRankTier, startTime, duration }) => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className="text-sm leading-5 font-medium text-blue-400">
            {matchId}
          </div>
          <div className="text-sm leading-5 text-gray-500">
            {moment
              .utc(new Date((startTime + duration) * 1000))
              .from(new Date())}
            /{rankTierToString(avgRankTier)}
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
    renderItem: ({ radiantTeam }) => (
      <div className="flex overflow-hidden">
        {(radiantTeam || "").split(",").map((heroId) =>
          heroes[heroId] ? (
            <img
              key={heroId}
              style={{ width: '50px'}}
              src={ODOTA_URL + heroes[heroId].img}
              alt=""
            />
          ) : null
        )}
      </div>
    )
  },
  {
    title: "DIRE",
    renderItem: ({ direTeam }) => (
      <div className="flex overflow-hidden">
        {(direTeam || "").split(",").map((heroId) =>
          heroes[heroId] ? (
            <img
              key={heroId}
              style={{ width: '50px'}}
              src={ODOTA_URL + heroes[heroId].img}
              alt=""
            />
          ) : null
        )}
      </div>
    )
  }
];

function MatchesPublic({ matchesPublic, loading }) {
  return (
    <div>
      <div className="flex flex-col m-6">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-800">
            <Table
              columns={columns}
              data={matchesPublic}
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
  matchesPublic: state.matchesPublic,
  loading: state.network[MATCHES_PUBLIC]
}))(MatchesPublic);
