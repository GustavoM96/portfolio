import { Container, ContainerCenter } from "./style";

export default function ContainerMain({ children }) {
  return (
    <ContainerCenter>
      <Container>{children}</Container>;
    </ContainerCenter>
  );
}
