import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Grid, withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import AddMessage from "../../Components/AddMessage/AddMessage";

interface Props {
  groupId: string
}

const Homepage: React.FC<Props> = ({ groupId }: Props) => {



  return <AddMessage />;
};

export default withWidth()(Homepage);
