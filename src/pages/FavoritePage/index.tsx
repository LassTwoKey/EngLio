import { FC } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../ui/PageWrapper";

const FavoritePage: FC = () => {
  const { id } = useParams();
  return <PageWrapper title={id} goBack></PageWrapper>;
};

export default FavoritePage;
