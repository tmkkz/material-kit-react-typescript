/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Card, { ICardProps } from "ui.components/Card/Card";
import CardHeader, { ICardHeaderProps } from "ui.components/Card/CardHeader";
import CardBody, { ICardBodyProps } from "ui.components/Card/CardBody";
import CardFooter, { ICardFooterProps } from "ui.components/Card/CardFooter";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

export default {
  title: "UI Kit React Material-UI/UI Components/Card/CardSample",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Card sample",
      },
    },
  },
} as Meta;
