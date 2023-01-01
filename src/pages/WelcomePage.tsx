import Typography from "../components/ui/Typography";
import PageWrapper from "../components/ui/PageWrapper";
import Button from "../components/ui/Button";

const technologies: { id: string; name: string }[] = [
  {
    id: "t1",
    name: "React",
  },
  {
    id: "t2",
    name: "Redux Toolkit",
  },
  {
    id: "t3",
    name: "React Router v6",
  },
  {
    id: "t4",
    name: "TypeScript",
  },
  {
    id: "t5",
    name: "Classnames",
  },
  {
    id: "t6",
    name: "SCSS",
  },
];

export const WelcomePage = (props: any) => {
  return (
    <PageWrapper>
      <div className="container">
        <Typography tag="h1">Добро пожаловать</Typography>
        <Typography tag="p">
          EngLio - это небольшое приложение для изуения английского языка по
          карточкам.
        </Typography>
        <Typography tag="h3">Технологии, использованные в проекте:</Typography>
        <ul>
          {technologies.map(technology => (
            <Typography key={technology.id} tag="li">
              {technology.name}
            </Typography>
          ))}
        </ul>
        <Button type="primary" icon="_icon-light-mode">
          Начать изучение
        </Button>
      </div>
    </PageWrapper>
  );
};
