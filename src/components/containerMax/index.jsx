import React, { Children } from "react";
import Avatar from "../../image/Avatar.jpg";

import { Container } from "./style";

export default function ContainerMax({ children }) {
  return <Container>{children}</Container>;
}
