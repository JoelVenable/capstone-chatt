import * as React from "react";
import { Container } from "@material-ui/core";
import { WelcomeBanner } from "../WelcomeBanner/WelcomeBanner";

const AuthPageContainer: React.FC<React.PropsWithChildren<{}>> = ({
  children
}: React.PropsWithChildren<{}>) => (
  <div>
    <WelcomeBanner />
    <Container maxWidth="xs" style={{ marginTop: "2rem" }}>
      {children}
    </Container>
  </div>
);

export { AuthPageContainer };
