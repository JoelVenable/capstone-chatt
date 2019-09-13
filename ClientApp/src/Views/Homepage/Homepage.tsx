import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Grid, withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";

interface Props extends RouteComponentProps, WithWidth {}

const Homepage: React.FC<Props> = ({ width }: Props) => {
  return <h1>Hello from homepage</h1>;
};

export default withWidth()(Homepage);
