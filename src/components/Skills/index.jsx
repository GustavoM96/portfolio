import { ContainerSkills, ContainerImages, Animation } from "./style";
import Ijs from "../../image/js.svg";
import Icss from "../../image/css.svg";
import Ihtml from "../../image/html.svg";
import Ireact from "../../image/react.svg";
import Iredux from "../../image/redux.svg";
import Igit from "../../image/git.svg";
import { useEffect, useState } from "react";
import { useObserver } from "../../services/intersectionObserver";

export default function Skills() {
  const techs = [
    { title: "Html", icon: Ihtml },
    { title: "Css", icon: Icss },
    { title: "JavaScript", icon: Ijs },
    { title: "React", icon: Ireact },
    { title: "Redux", icon: Iredux },
    { title: "Git", icon: Igit },
  ];
  const [isShown, setisShown] = useState(false);

  const loadComponent = useObserver(setisShown);

  useEffect(() => {
    loadComponent.observe(document.getElementById("Skills"));
  }, []);

  return (
    <ContainerSkills id="Skills">
      <Animation isShown={isShown}>
        <h1>Tecnologias Exploradas</h1>

        <ContainerImages>
          {techs.map((tech) => (
            <div>
              <img src={tech.icon} alt={tech.title} />
              <figcaption>{tech.title}</figcaption>
            </div>
          ))}
        </ContainerImages>
      </Animation>
    </ContainerSkills>
  );
}
