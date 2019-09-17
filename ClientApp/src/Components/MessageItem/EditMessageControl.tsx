import React, { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext/useAuthContext";
import { ButtonGroup, IconButton, Dialog } from "@material-ui/core";
import styled from "@emotion/styled";
import { Edit, Delete } from "@material-ui/icons";
import EditMessageDialog from "../EditMessageDialog/EditMessageDialog";
const ControlContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
interface Props {
  senderId: string;
  messageId: string;
  messageText: string;
  setUpdate: Function;
}

const EditMessageControl: React.FC<Props> = ({
  senderId,
  messageId,
  setUpdate,
  messageText
}: Props) => {
  const {
    status: { userId }
  } = useAuthContext();
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  if (userId === undefined || userId !== senderId) return null;

  return (
    <ControlContainer>
      <ButtonGroup size="small" variant="contained">
        <EditMessageDialog
          open={editOpen}
          messageId={messageId}
          openControl={setEditOpen}
          setUpdate={setUpdate}
          startingText={messageText}
        />
        <IconButton onClick={() => setEditOpen(true)}>
          <Edit />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </ButtonGroup>
    </ControlContainer>
  );
};

export default EditMessageControl;
