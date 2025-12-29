import { useContext, useMemo, useState } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import "./MessagesScreen.css";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { MdAttachFile, MdStarOutline, MdNotificationsOff, MdShield, MdLockOutline, MdFavoriteBorder, MdBlock, MdThumbDownOffAlt, MdDeleteOutline, } from "react-icons/md";
import { FiX } from "react-icons/fi";

export default function MessagesScreen() {
    const { contactSelected, loadingContact, messages, sendMessage } =
        useContext(ContactDetailContext);

    const [text, setText] = useState("");
    const navigate = useNavigate();
    const [showInfo, setShowInfo] = useState(false);

    const title = useMemo(() => {
        if (loadingContact) return "Cargando…";
        if (!contactSelected) return "Seleccioná un chat";
        return contactSelected.contact_name ?? "Chat";
    }, [contactSelected, loadingContact]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        sendMessage(text);
        setText("");
    };

    if (!contactSelected) {
        return (
            <div className="wa-empty">
                <div className="wa-empty__card">
                    <h2>WhatsApp Web</h2>
                    <p>Seleccioná un contacto para empezar a chatear.</p>
                    <button className="wa-empty__cta" type="button">
                        Descargar
                    </button>
                </div>
            </div>
        );
    }

    const avatarUrl = contactSelected.contact_avatar || "";

    return (
        <div className="wa-chatwrap">
            <section className="wa-chat" aria-label={`Chat con ${title}`}>
                {/* HEADER */}
                <header className="wa-chat__header">
                    <button
                        type="button"
                        className="wa-back"
                        onClick={() => navigate("/")}
                        aria-label="Volver"
                        title="Volver"
                    >
                        <FiArrowLeft />
                    </button>

                    <button
                        type="button"
                        className="wa-chat__contactBtn"
                        onClick={() => setShowInfo((v) => !v)}
                        aria-label="Ver info del contacto"
                    >
                        <div className="wa-chat__contact">
                            <div className="wa-chat__avatar">
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt={title} />
                                ) : (
                                    String(title).slice(0, 1).toUpperCase()
                                )}
                            </div>

                            <div className="wa-chat__meta">
                                <div className="wa-chat__name">{title}</div>
                                <div className="wa-chat__status">en línea</div>
                            </div>
                        </div>
                    </button>

                    <div className="wa-chat__actions">
                        <button className="wa-icon-btn" title="Buscar">
                            <FiSearch />
                        </button>

                        <button className="wa-icon-btn" title="Menú">
                            <FiMoreVertical />
                        </button>
                    </div>

                </header>

                {/* BODY */}
                <div className="wa-chat__body">
                    {messages.map((m) => (
                        <div
                            key={m.message_id}
                            className={m.direction === "sent" ? "wa-msg wa-msg--sent" : "wa-msg wa-msg--recv"}
                        >
                            <div className="wa-msg__bubble">
                                <span className="wa-msg__text">{String(m.content ?? "")}</span>
                                <span className="wa-msg__time">
                                    {new Date(m.created_at).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* COMPOSER */}
                <form className="wa-chat__composer" onSubmit={onSubmit}>
                    <input
                        className="wa-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribí un mensaje…"
                        aria-label="Escribir mensaje"
                    />
                    <button className="wa-send" type="submit">
                        <FiSend />
                    </button>
                </form>
            </section>

            {/* INFO PANEL */}
            {showInfo && (
                <aside className="wa-info" aria-label="Información del contacto">
                    <div className="wa-info__top">
                        <div className="wa-info__title">Info. del contacto</div>

                        <button
                            className="wa-icon-btn"
                            type="button"
                            onClick={() => setShowInfo(false)}
                            title="Cerrar"
                        >
                            <FiX />
                        </button>
                    </div>

                    <div className="wa-info__content">
                        <div className="wa-info__profile">
                            <div className="wa-info__avatar">
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt={title} />
                                ) : (
                                    String(title).slice(0, 1).toUpperCase()
                                )}
                            </div>

                            <div className="wa-info__name">{title}</div>
                            <div className="wa-info__sub">Info.</div>
                        </div>

                        <button className="wa-info__item" type="button">
                            <span className="wa-info__ico"><MdAttachFile /></span>
                            <span className="wa-info__txt">Archivos, enlaces y documentos</span>
                            <span className="wa-info__right">0</span>
                        </button>

                        <button className="wa-info__item" type="button">
                            <span className="wa-info__ico"><MdStarOutline /></span>
                            <span className="wa-info__txt">Mensajes destacados</span>
                        </button>

                        <div className="wa-info__item wa-info__toggle">
                            <span className="wa-info__ico"><MdNotificationsOff /></span>
                            <span className="wa-info__txt">Silenciar notificaciones</span>
                            <span className="wa-info__right">
                                <label className="wa-switch">
                                    <input type="checkbox" />
                                    <span className="wa-switch__track" />
                                </label>
                            </span>
                        </div>

                        <button className="wa-info__item" type="button">
                            <span className="wa-info__ico"><MdShield /></span>
                            <span className="wa-info__txt">
                                Mensajes temporales
                                <small>Desactivados</small>
                            </span>
                        </button>

                        <button className="wa-info__item" type="button">
                            <span className="wa-info__ico"><MdShield /></span>
                            <span className="wa-info__txt">
                                Privacidad avanzada del chat
                                <small>Desactivado</small>
                            </span>
                        </button>

                        <button className="wa-info__item" type="button">
                            <span className="wa-info__ico"><MdLockOutline /></span>
                            <span className="wa-info__txt">
                                Cifrado
                                <small>Los mensajes están cifrados de extremo a extremo.</small>
                            </span>
                        </button>

                        <div className="wa-info__sep" />

                        <button className="wa-info__danger" type="button">
                            <span className="wa-info__ico"><MdFavoriteBorder /></span>
                            <span className="wa-info__txt">Añadir a Favoritos</span>
                        </button>

                        <button className="wa-info__danger wa-info__danger--red" type="button">
                            <span className="wa-info__ico"><MdBlock /></span>
                            <span className="wa-info__txt">Bloquear</span>
                        </button>

                        <button className="wa-info__danger wa-info__danger--red" type="button">
                            <span className="wa-info__ico"><MdThumbDownOffAlt /></span>
                            <span className="wa-info__txt">Reportar</span>
                        </button>

                        <button className="wa-info__danger wa-info__danger--red" type="button">
                            <span className="wa-info__ico"><MdDeleteOutline /></span>
                            <span className="wa-info__txt">Eliminar chat</span>
                        </button>
                    </div>
                </aside>
            )}

        </div>
    );
}
