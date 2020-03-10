import React from "react";
import HeroesPro from "./HeroesPro";
import HeroesPublic from "./HeroesPublic";
import NotFound from "./NotFound";
import TabLink from "./TabLink";
import { connect } from "react-redux";
import withLoadingIndicator from "./withLoadingIndicator";
import {HEROES} from "../store/actions/heroes.actions";

const Tables = {
  pro: <HeroesPro />,
  public: <HeroesPublic />
};

function Heroes({ value, loading }) {
  if (!Tables[value]) return <NotFound />;

  return (
    <div className="flex-grow container mx-auto sm:px-8 pt-40 pb-8 px-8">
      <div className="bg-gray-900 border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 border-gray-800">
        <div className="border-b px6 border-gray-800">
          <div className="flex justify-between -mb-px px-8">
            <div className="lg:flex">
              <TabLink
                to={{ type: "HEROES", params: { value: "pro" } }}
                text={"Professional"}
                active="/heroes/pro"
              />
              <TabLink
                to={{ type: "HEROES", params: { value: "public" } }}
                text={"Public"}
                active="/heroes/public"
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
  loading: state.network[HEROES]
}))(withLoadingIndicator(Heroes));
