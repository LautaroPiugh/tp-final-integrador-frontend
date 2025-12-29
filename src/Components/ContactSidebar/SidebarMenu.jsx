import { useEffect, useRef, useState } from "react";
import {MdGroupAdd, MdStarOutline, MdCheckBoxOutlineBlank, MdMarkChatRead, MdLockOutline, MdLogout,} from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";

export default function SidebarMenu() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onDown = (e) => {
            if (!open) return;
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };

        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div className="wa-dd" ref={ref}>
            <button
                className="wa-icon-btn"
                type="button"
                title="Menú"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                <FiMoreVertical />
            </button>

            {open && (
                <div className="wa-dd__menu" role="menu">
                    <button className="wa-dd__item" role="menuitem" type="button">
                        <span className="wa-dd__ico"><MdGroupAdd /></span>
                        Nuevo grupo
                    </button>

                    <button className="wa-dd__item" role="menuitem" type="button">
                        <span className="wa-dd__ico"><MdStarOutline /></span>
                        Mensajes destacados
                    </button>

                    <button className="wa-dd__item" role="menuitem" type="button">
                        <span className="wa-dd__ico"><MdCheckBoxOutlineBlank /></span>
                        Seleccionar chats
                    </button>

                    <button className="wa-dd__item" role="menuitem" type="button">
                        <span className="wa-dd__ico"><MdMarkChatRead /></span>
                        Marcar todos como leídos
                    </button>

                    <div className="wa-dd__sep" />

                    <button className="wa-dd__item" role="menuitem" type="button">
                        <span className="wa-dd__ico"><MdLockOutline /></span>
                        Bloqueo de aplicación
                    </button>

                    <button className="wa-dd__item wa-dd__item--danger" role="menuitem" type="button">
                        <span className="wa-dd__ico"><MdLogout /></span>
                        Cerrar sesión
                    </button>
                </div>
            )}
        </div>
    );
}
