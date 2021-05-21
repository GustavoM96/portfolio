import {
  ContainerAbout,
  Title,
  Error,
  ContainerTextInput,
  ContainerContact,
  ContainerText,
} from "./style";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

export default function Contact() {
  function linkdIn() {
    window.open("https://www.linkedin.com/in/gustavo-messias/");
  }
  function GitLab() {
    window.open("https://gitlab.com/gustavo.hmessias96/");
  }
  function GitHub() {
    window.open("https://github.com/GustavoM96/");
  }
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

  return (
    <ContainerAbout id="Contact">
      <ContainerContact>
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
        <ContainerText>
          <h2>Será este o fim?</h2>
          <p>
            Claro que não tripulante, agora você poderá entrar em contato comigo
            pelo campo ao lado.
          </p>
          <div id="containerButtons">
            <button onClick={GitLab} id="Git-Hub">
              Git-Lab
            </button>
            <button onClick={GitHub} id="Git-Hub">
              Git-Hub
            </button>
            <button onClick={linkdIn} id="linkdIn">
              LinkdIn
            </button>
          </div>
        </ContainerText>
      </ContainerContact>
    </ContainerAbout>
  );
}
