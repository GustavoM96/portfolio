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

    // axios
    //   .post("https://api.emailjs.com/api/v1.0/email/send", dataFormed)
    //   .then((resp) => console.log(resp));

    reset();
  };

  return (
    <ContainerAbout id="Contact">
      <h1>Contato</h1>
      <ContainerContact>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <div>
              <ContainerTextInput>
                <Title className="label">Nome</Title>
                <Error className="errorM">{errors.name?.message}</Error>
              </ContainerTextInput>
              <input {...register("name")} name="name" />
            </div>

            <div>
              <ContainerTextInput>
                <Title className="label">Email</Title>
                <Error className="errorM">{errors.email?.message}</Error>
              </ContainerTextInput>
              <input {...register("email")} name="email" />
            </div>

            <div>
              <ContainerTextInput>
                <Title className="label">Mensagem</Title>
                <Error className="errorM">{errors.message?.message}</Error>
              </ContainerTextInput>
              <textarea {...register("message")} name="message" type="text" />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <ContainerText>
          <h2>Dev em constante desenvolvimento...</h2>
          <p>
            Gustavo Henrique Messias 25 anos formado em engenharia
            Elétrica-Eletônica e apaixonado pelas áreas de exatas e
            principalmente por programação{" "}
          </p>
          <p>
            Comecei a entrar a fundo na programação em outubro de 2020 ao ser
            aprovado para ser aluno da Kenzie Academy Brasil, onde pude
            desenvolver diversas hábilidades e tecnologias aplicados a projetos
          </p>
        </ContainerText>
      </ContainerContact>
    </ContainerAbout>
  );
}
