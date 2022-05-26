import { Container } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import SubHeader from "../components/SubHeader";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <CampsitesList />
      <p>PIZZA HAWAIANA - DIRECTORY </p>
    </Container>
  );
};

export default CampsitesDirectoryPage;
