import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import { Colors } from "types";
import NavPills from "ui.components/NavPills/NavPills";

export default {
  title: "UI Kit React Material-UI/UI Components/NavPills",
  component: NavPills,
  parameters: {
    docs: {
      description: {
        component: "NavPills",
      },
    },
  },
} as Meta;

export const NavPillsSample1 = () => {
  return (
    <NavPills
      color="primary"
      tabs={[
        {
          tabId: 0,
          tabButton: "Dashboard",
          tabIcon: Dashboard,
          tabContent: (
            <span>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
            </span>
          ),
        },
        {
          tabId: 1,
          tabButton: "Schedule",
          tabIcon: Schedule,
          tabContent: (
            <span>
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
              </p>
              <br />
              <p>
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions. Dramatically visualize customer directed
                convergence without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play networks.
                Dynamically procrastinate B2C users after installed base
                benefits.
              </p>
            </span>
          ),
        },
        {
          tabId: 2,
          tabButton: "Tasks",
          tabIcon: List,
          tabContent: (
            <span>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
            </span>
          ),
        },
      ]}
    />
  );
};

export const NavPillsSample2 = () => {
  return (
    <NavPills
      color="rose"
      horizontal={{
        tabsGrid: { xs: 12, sm: 4, md: 4 },
        contentGrid: { xs: 12, sm: 8, md: 8 },
      }}
      tabs={[
        {
          tabId: 0,
          tabButton: "Dashboard",
          tabIcon: Dashboard,
          tabContent: (
            <span>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence without
                revolutionary ROI. Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
            </span>
          ),
        },
        {
          tabId: 1,
          tabButton: "Schedule",
          tabIcon: Schedule,
          tabContent: (
            <span>
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
              </p>
              <br />
              <p>
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions. Dramatically visualize customer directed
                convergence without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play networks.
                Dynamically procrastinate B2C users after installed base
                benefits.
              </p>
            </span>
          ),
        },
      ]}
    />
  );
};
