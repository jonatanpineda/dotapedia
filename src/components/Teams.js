import React from "react";
import Table from "./Table";
import { connect } from "react-redux";
import { TEAMS } from "../store/actions/teams.actions";
import {getOrdinal, getPercentage, percentageToColor} from "../utils";
import moment from "moment";
import PercentBar from "./PercentBar";
import {
  getFirstOneHundredTeamsMaxRating,
  getFirstOneHundredTeams,
  getFirstOneHundredTeamsMaxLosses,
  getFirstOneHundredTeamsMaxWins
} from "../store/selectors/teams.selectors";

const getTeamsColumns = (maxRating, maxLosses, maxWins) => [
  {
    title: "RANK",
    renderItem: (_, index) => (
      <div className="text-gray-500">{getOrdinal(index + 1)}</div>
    )
  },
  {
    title: "NAME",
    renderItem: ({ logoUrl, name, lastMatchTime }) => (
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10" src={logoUrl} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-sm leading-5 font-medium text-blue-400">
            {name}
          </div>
          <div className="text-sm leading-5 text-gray-500">
            {moment.utc(new Date(lastMatchTime * 1000)).from(new Date())}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "RATING",
    renderItem: ({ rating }) => {
      const percentage = getPercentage(maxRating, rating);
      return (
        <PercentBar
          showPercent={false}
          label={Math.floor(rating)}
          percent={percentage}
          color={percentageToColor(percentage)}
        />
      )
    }
  },
  {
    title: "WINS",
    renderItem: ({ wins }) => {
      const percentage = getPercentage(maxWins, wins);
      return (
        <PercentBar
          showPercent={false}
          label={wins}
          percent={percentage}
          color={percentageToColor(percentage)}
        />
      )
    }

  },
  {
    title: "LOSSES",
    renderItem: ({ losses }) => {
      const percentage = getPercentage(maxLosses, losses);
      return (
        <PercentBar
          showPercent={false}
          label={losses}
          percent={percentage}
          color={percentageToColor(percentage)}
        />
      )
    }
  }
];

function Teams({ teams, loading, maxRating, maxLosses, maxWins }) {
  const columns = getTeamsColumns(maxRating, maxLosses, maxWins);

  return (
    <div className="flex-grow container mx-auto sm:px-8 pt-40 pb-8 px-8">
      <div className="bg-gray-900 border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 border-gray-800">
        <div className="border-b px6 border-gray-800">
          <div>
            <div className="flex flex-col m-6">
              <div className="text-center text-white mb-5">
                Team Elo Rankings k=32, init=1000
              </div>
              <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-800">
                  <Table
                    columns={columns}
                    data={teams}
                    keyId="teamId"
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  teams: getFirstOneHundredTeams(state),
  loading: state.network[TEAMS],
  maxRating: getFirstOneHundredTeamsMaxRating(state),
  maxWins: getFirstOneHundredTeamsMaxWins(state),
  maxLosses: getFirstOneHundredTeamsMaxLosses(state)
}))(Teams);
