import "./ChatScreen.css";
import { MdLaptopWindows, MdLockOutline } from "react-icons/md";

export default function ChatScreen(){
    return (
        <div className="wa-home" role="region" aria-label="Inicio">
            <div className="wa-home__card">
                <div className="wa-home__logo" aria-hidden="true">
                    <MdLaptopWindows />
                </div>

                <h1 className="wa-home__title">Descarga WhatsApp para Windows</h1>

                <p className="wa-home__text">
                    Descarga la aplicación para Windows y haz llamadas, comparte pantalla y
                    disfruta de una experiencia más rápida.
                </p>

                <a
                    className="wa-home__btn"
                    href="https://www.whatsapp.com/download"
                    target="_blank"
                    rel="noreferrer"
                >
                    Descargar
                </a>

                <div className="wa-home__footer">
                    <MdLockOutline />
                    <span>
        Tus mensajes personales están cifrados de extremo a extremo.
      </span>
                </div>
            </div>
        </div>
    );
}
