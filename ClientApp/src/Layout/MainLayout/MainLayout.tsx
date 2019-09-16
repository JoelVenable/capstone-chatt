import React, { PropsWithChildren, useState, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import clsx from "clsx";
import useGroupPanelStyles from "./useGroupPanelStyles";
import Navbar from "../Navbar/Navbar";
import { WithWidth } from "@material-ui/core/withWidth";
import { Container } from "@material-ui/core";
import GroupPanel from "../GroupPanel/GroupPanel";

const MainLayout: React.FC<PropsWithChildren<WithWidth>> = ({
  width,
  children
}: PropsWithChildren<WithWidth>) => {
  const {
    status: { isAuthenticated }
  } = useAuthContext();
  const classes = useGroupPanelStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [variant, setVariant] = useState<"persistent" | "temporary">(
    "temporary"
  );

  const [activeGroup, setActiveGroup] = useState<string>("");

  const hideDrawer = () => setExpanded(false);
  const showDrawer = () => setExpanded(true);

  useEffect(() => {
    const wide = width === "md" || width === "lg" || width === "xl";
    if (wide) setVariant("persistent");
    if (!wide) hideDrawer();
    if (isAuthenticated && wide) showDrawer();
  }, [width, isAuthenticated]);

  return (
    <>
      <GroupPanel
        drawerExpanded={expanded}
        variant={variant}
        hideDrawer={hideDrawer}
      />
      <Navbar drawerExpanded={expanded} showDrawer={showDrawer} />
      <Container
        className={clsx(classes.content, {
          [classes.contentShift]: expanded
        })}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
