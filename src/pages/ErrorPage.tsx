import Header from "../components/Header/Header";
import Typography from "../components/ui/Typography";

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
