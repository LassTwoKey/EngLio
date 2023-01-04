import Header from "../layout/Header";
import Typography from "../ui/Typography";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="d-flex fd-col ai-center jc-center">
        <Typography tag="h1">404</Typography>
        <Typography tag="h2">Страница не найдена</Typography>
      </main>
    </>
  );
};

export default ErrorPage;
