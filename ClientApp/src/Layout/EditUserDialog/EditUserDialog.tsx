import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
import { myColors } from "../../theme";
import styled from "@emotion/styled";
import { userManager } from "../../DataAccess/userManager";
interface Props {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLElement>;
}

const FormDiv = styled.div`
  margin: 0.4rem;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.6rem;
`;

const EditUserDialog: React.FC<Props> = ({ open, handleClose }: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [handle, setHandle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      let user = await userManager.get();
      if (user) {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setHandle(user.handle);
      }
    })();
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { id, value } = e.currentTarget;
    if (id === "firstName") setFirstName(value);
    if (id === "lastName") setLastName(value);
    if (id === "handle") setHandle(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    setLoading(true);
    const { response } = await userManager.put({
      firstName,
      lastName,
      handle
    });
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>User Settings</DialogTitle>
      <Divider />
      <form>
        <FormDiv>
          <TextField
            label="First Name"
            value={firstName}
            style={{ backgroundColor: myColors.white }}
            onChange={handleChange}
            disabled={loading}
            fullWidth
            id="firstName"
            variant="filled"
          />
        </FormDiv>
        <FormDiv>
          <TextField
            label="Last Name"
            value={lastName}
            style={{ backgroundColor: myColors.white }}
            onChange={handleChange}
            disabled={loading}
            fullWidth
            id="lastName"
            variant="filled"
          />
        </FormDiv>
        <FormDiv>
          <TextField
            label="Handle"
            value={handle}
            style={{ backgroundColor: myColors.white }}
            onChange={handleChange}
            disabled={loading}
            fullWidth
            id="handle"
            variant="filled"
          />
        </FormDiv>
        <Centered>
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            variant="contained"
            color="primary">
            Submit
          </Button>
        </Centered>
      </form>
    </Dialog>
  );
};

export default EditUserDialog;
