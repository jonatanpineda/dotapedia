import React from "react";
import logo from "../assets/logo.png";
import { GiDwarfHelmet, GiGuards, GiGreatPyramid, GiSwordWound } from "react-icons/gi";

import TabLink from "./TabLink";

function Navbar() {
  return (
    <nav className="fixed w-full z-10 top-0 shadow">
      <div className="bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="flex items-center md:justify-between py-4">
            <div className="w-1/2 md:w-auto text-center text-white text-2xl font-medium">
              <div className="flex items-center">
                <img className="h-6 w-6 mr-3" src={logo} alt="logo" />
                Dotapedia
              </div>
            </div>
          </div>
        </div>
        <div className="hidden bg-gray-900 md:block md:bg-gray-900 md:border-b md:border-gray-900">
          <div className="container mx-auto px-8">
            <div className="md:flex">
              <TabLink
                to={{ type: "HEROES", params: { value: "pro" } }}
                active="/heroes/:value"
								icon={<GiDwarfHelmet className="h-6 w-6 mr-2" />}
								text={"Heroes"}
              />
              <TabLink
                to={{ type: "MATCHES" }}
                active={"/matches"}
                icon={<GiSwordWound className="h-6 w-6 mr-2" />}
                text={"Matches"}
              />
              <TabLink
                to={{ type: "TEAMS"}}
                active="/teams"
                icon={<GiGuards className="h-6 w-6 mr-2" />}
                text={"Teams"}
              />
              <TabLink
                to={{ type: "DISTRIBUTIONS" }}
                active={"/distributions"}
                icon={<GiGreatPyramid className="h-6 w-6 mr-2" />}
                text={"Distributions"}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
