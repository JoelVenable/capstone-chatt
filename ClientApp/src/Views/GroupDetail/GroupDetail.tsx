import React from "react";
import { Grid } from "@material-ui/core";

interface Props {
  groupName: string;
}

const GroupDetail: React.FC<Props> = ({ groupName }: Props) => {
  return (
    <Grid>
      <h1>Hello from {groupName}</h1>
    </Grid>
  );
};

export default GroupDetail;
