import React from "react";
import NotFound from "./NotFound";
import TabLink from "./TabLink";
import { connect } from "react-redux";
import MatchesPro from "./MatchesPro";
import MatchesPublic from "./MatchesPublic";

const Tables = {
  pro: <MatchesPro />,
  highMmr: <MatchesPublic />
};

function Matches({ value }) {
  if (!Tables[value]) return <NotFound />;

  return (
    <div className="flex-grow container mx-auto sm:px-8 pt-40 pb-8 px-8">
      <div className="bg-gray-900 border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 border-gray-800">
        <div className="border-b px6 border-gray-800">
          <div className="flex justify-between -mb-px px-8">
            <div className="lg:flex">
              <TabLink
                to={{ type: "MATCHES", params: { value: "pro" } }}
                text={"Professional"}
                active="/matches/pro"
              />
              <TabLink
                to={{ type: "MATCHES", params: { value: "highMmr" } }}
                text={"Top Public"}
                active="/matches/highMmr"
              />
            </div>
          </div>
          {Tables[value]}
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  value: state.location.params.value,
}))(Matches);
