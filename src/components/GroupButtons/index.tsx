import { ReactNode } from "react";

import { GroupButtonsStyled } from "./styles";

interface GroupButtonsProps {
  children: ReactNode;
}

export function GroupButtons({ children }: GroupButtonsProps) {
  return (
    <GroupButtonsStyled className="groupButtons">{children}</GroupButtonsStyled>
  );
}
