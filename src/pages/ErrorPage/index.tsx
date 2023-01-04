import { FC } from "react";
import Header from "../../layout/Header";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";

const ErrorPage: FC = () => {
  return (
    <>
      <Header />
      <PageWrapper className="d-flex fd-col ai-center jc-center py-4">
        <Typography tag="h1">404</Typography>
        <Typography tag="h2">Страница не найдена</Typography>
      </PageWrapper>
    </>
  );
};

export default ErrorPage;
