import React, { PropsWithChildren, useState, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import clsx from "clsx";
import useGroupPanelStyles from "./useGroupPanelStyles";
import Navbar from "../Navbar/Navbar";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";
import { Container } from "@material-ui/core";
import GroupPanel from "../GroupPanel/GroupPanel";
import Homepage from "../../Views/Homepage/Homepage";

const MainLayout: React.FC<WithWidth> = ({ width }: WithWidth) => {
  const {
    status: { isAuthenticated }
  } = useAuthContext();
  const classes = useGroupPanelStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [variant, setVariant] = useState<"persistent" | "temporary">(
    "temporary"
  );
  const [update, setUpdate] = useState<number>(Math.random());

  const [activeGroup, setActiveGroup] = useState<string>("");

  const hideDrawer = () => setExpanded(false);
  const showDrawer = () => setExpanded(true);

  useEffect(() => {
    const wide = width === "md" || width === "lg" || width === "xl";
    if (wide) setVariant("persistent");
    if (!wide) hideDrawer();
    if (isAuthenticated && wide) showDrawer();
  }, [width, isAuthenticated]);

  if (isAuthenticated)
    return (
      <>
        <GroupPanel
          drawerExpanded={expanded}
          variant={variant}
          hideDrawer={hideDrawer}
          setActiveGroup={setActiveGroup}
          update={update}
          setUpdate={setUpdate}
        />
        <Navbar drawerExpanded={expanded} showDrawer={showDrawer} />
        <Container
          className={clsx(classes.content, {
            [classes.contentShift]: expanded
          })}>
          <Homepage
            groupId={activeGroup}
            update={update}
            setUpdate={setUpdate}
          />
        </Container>
      </>
    );
  else return <></>;
};

export default withWidth()(MainLayout);
