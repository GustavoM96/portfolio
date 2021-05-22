import {
  ContainerAbout,
  Title,
  Error,
  ContainerTextInput,
  ContainerContact,
  ContainerText,
  ContainerIcons,
} from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Contact() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("email inválido").required("Campo Obrigatório"),
    message: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    const dataFormed = {
      service_id: "gmailMessage",
      template_id: "template",
      user_id: "user_Kc790HNAepEsTC7SwSFAx",
      template_params: {
        from_email: data.email,
        from_name: data.name,
        message: data.message,
        to_name: "Gustavo Henrique Messias",
        subject: "Alguém mandou uma mensagem do PORTIFOLIO",
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", dataFormed)
      .then((resp) => console.log(resp));

    reset();
  };
  const [isShown, setisShown] = useState(false);

  const loadComponent = new IntersectionObserver(
    (entry) => {
      console.log(entry[0].intersectionRatio);
      if (entry[0].intersectionRatio > 0.5) {
        setisShown(true);
      }
      if (entry[0].intersectionRatio == 0) {
        setisShown(false);
      }
    },
    {
      threshold: [0, 0.5],
    }
  );
  useEffect(() => {
    loadComponent.observe(document.getElementById("Contact"));
  }, []);

  return (
    <ContainerAbout id="Contact">
      <ContainerContact isShown={isShown}>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <div>
              <ContainerTextInput>
                <Title for="nameField">Nome</Title>
                <Error>{errors.name?.message}</Error>
              </ContainerTextInput>
              <input id="nameField" {...register("name")} name="name" />
            </div>

            <div>
              <ContainerTextInput>
                <Title for="emailField">Email</Title>
                <Error>{errors.email?.message}</Error>
              </ContainerTextInput>
              <input id="emailField" {...register("email")} name="email" />
            </div>

            <div>
              <ContainerTextInput>
                <Title for="messageField">Mensagem</Title>
                <Error>{errors.message?.message}</Error>
              </ContainerTextInput>
              <textarea
                id="messageField"
                {...register("message")}
                name="message"
                type="text"
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <ContainerText isShown={isShown}>
          <h2>Será este o fim?</h2>
          <p>
            Claro que não tripulante, agora você poderá entrar em contato comigo
            pelo campo ao lado.
          </p>
        </ContainerText>
      </ContainerContact>
    </ContainerAbout>
  );
}
