import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  ContainerModal,
  ContainerButton,
  ContainerTitle,
  Message,
} from "./style";
import Irocket from "../../image/rocket.svg";
import Icancel from "../../image/cancel.svg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "radial-gradient(ellipse at bottom, #1b2735 0%, #000 55%)",
    border: "2px solid #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
  },
}));

export default function TransitionsModal({
  messageData,
  messageWasSend,
  isOpen,
  setisOpen,
  images,
}) {
  const classes = useStyles();

  const handleOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <ContainerModal>
            <div className={classes.paper}>
              {messageWasSend ? (
                <>
                  <ContainerTitle>
                    <img src={images?.send} alt="Irocket" />
                    <h1>Mensagem Enviada</h1>
                  </ContainerTitle>
                  <p>{messageData.name}</p>
                  <p>{messageData.email}</p>
                  <Message>
                    <p>{messageData.message}</p>
                  </Message>
                </>
              ) : (
                <>
                  <ContainerTitle cancel={true}>
                    <img src={images?.cancel} alt="Icancel" />
                    <h1>Ocorreu um Erro</h1>
                  </ContainerTitle>
                  <p>Tente enviar sua mensagem mais tarde</p>
                </>
              )}
              <ContainerButton>
                <button onClick={handleClose}>OK</button>
              </ContainerButton>
            </div>
          </ContainerModal>
        </Fade>
      </Modal>
    </div>
  );
}
