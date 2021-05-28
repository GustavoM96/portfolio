import {
  Title,
  Error,
  ContainerTextInput,
  ContainerText,
  ContainerContact,
  ContainerInfo,
} from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useObserver } from "../../services/intersectionObserver";
import TransitionsModal from "../Modal";
import Irocket from "../../image/rocket.svg";
import Icancel from "../../image/cancel.svg";

export default function Contact() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(255, "máx 255 caracteres")
      .required("Campo Obrigatório"),
    email: yup
      .string()
      .max(255, "máx 255 caracteres")
      .email("email inválido")
      .required("Campo Obrigatório"),
    message: yup
      .string()
      .max(1023, "máx 1023 caracteres")
      .required("Campo Obrigatório"),
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
    const handleRequest = (data, hasPostMessage) => {
      settextButton("Enviar");
      setdisabledButton(false);
      setmessageWasSend(hasPostMessage);
      setmessageData(data);
      setisOpen(true);
    };
    const dataFormed = {
      service_id: "gmailMessage",
      template_id: "template",
      user_id: "user_Kc790HNAepEsTC7SwSFAx",
      template_params: {
        from_email: data.email,
        from_name: data.name,
        message: data.message,
        to_name: "Gustavo Henrique Messias",
        subject: "Alguém mandou uma mensagem do PORTFOLIO",
      },
    };
    console.log(data);
    settextButton("Enviando...");
    setdisabledButton(true);

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", dataFormed)
      .then((resp) => {
        handleRequest(data, true);
        reset();
      })
      .catch((resp) => {
        handleRequest(data, false);
      });
  };
  const [textButton, settextButton] = useState("Enviar");
  const [isShown, setisShown] = useState(false);
  const [disabledButton, setdisabledButton] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [messageWasSend, setmessageWasSend] = useState(true);
  const [messageData, setmessageData] = useState({
    name: "name",
    email: "email",
    message: "message",
  });

  const loadComponent = useObserver(setisShown);

  useEffect(() => {
    loadComponent.observe(document.getElementById("Contact"));
  }, []);

  return (
    <ContainerContact id="Contact" isShown={isShown}>
      <ContainerInfo>
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
          <button type="submit" disabled={disabledButton}>
            {textButton}
          </button>
        </form>
        <ContainerText isShown={isShown}>
          <h2>Será este o fim?</h2>
          <p>
            Claro que não tripulante, agora você poderá entrar em contato comigo
            pelo campo ao lado.
          </p>
          <TransitionsModal
            messageData={messageData}
            messageWasSend={messageWasSend}
            isOpen={isOpen}
            setisOpen={setisOpen}
            images={{ cancel: Icancel, send: Irocket }}
          />
        </ContainerText>
      </ContainerInfo>
    </ContainerContact>
  );
}
