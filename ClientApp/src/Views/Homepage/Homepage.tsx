import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Grid, withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";

import GroupPanel from "../GroupPanel/GroupPanel";

interface Props extends RouteComponentProps<WithWidth> {}

const Homepage: React.FC<Props> = ({ width }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  let toggleOpen = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    if (width === "md" || width === "lg" || width === "xl") {
      // Disable controls
      toggleOpen = () => {};
      setDrawerOpen(true);
    } else {
      toggleOpen = () => setDrawerOpen(!drawerOpen);
    }
  }, [width, drawerOpen]);

  return (
    <Grid container>
      <Grid item cols={1}>
        <GroupPanel />
      </Grid>
    </Grid>
  );
};

export default withWidth()(Homepage);
