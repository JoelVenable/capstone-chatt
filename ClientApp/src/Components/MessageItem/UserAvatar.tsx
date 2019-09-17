import React from "react";
import styled from "@emotion/styled";
import { myColors } from "../../theme";
import { Avatar } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const AvatarDiv = styled.div`
  width: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  background-color: ${myColors.lightGrey};
`;

interface Props {
  imageUrl?: string;
  name: string;
  initials: string;
}

const UserAvatar: React.FC<Props> = ({ imageUrl, name, initials }: Props) => {
  return (
    <AvatarDiv>
      {imageUrl ? (
        <Avatar
          src={imageUrl}
          alt={name}
          style={{ boxShadow: `0px 0px 12px ${myColors.lightGrey}` }}
        />
      ) : (
        <Avatar
          style={{
            boxShadow: `0px 0px 12px ${myColors.darkGrey}`,
            backgroundColor: myColors.medBlue
          }}>
          {initials}
        </Avatar>
      )}
    </AvatarDiv>
  );
};

export default UserAvatar;
