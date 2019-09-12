import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "@material-ui/core";

interface Props extends RouteComponentProps<{ groupName: string }> {}

const GroupDetail: React.FC<Props> = ({ match }: Props) => {
  const groupName = match.params.groupName;

  return (
    <Grid>
      <h1>Hello from {groupName}</h1>
    </Grid>
  );
};
