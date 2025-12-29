import "./ProfileSidebar.css";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";

export default function ProfileSidebar() {
    const navigate = useNavigate();

    const me = useMemo(() => {
        return {
            name: "Lautaro Piugh",
            about: "¡Hola! Estoy usando WhatsApp.",
            phone: "+54 9 3421 11-1111",
            avatarUrl: "/me.jpg",
        };
    }, []);

    const onClose = () => navigate("/", { replace: true });

    return (
        <div className="wa-profile-side">
            <header className="wa-profile-side__top">
                <button
                    className="wa-profile-side__back"
                    type="button"
                    onClick={onClose}
                    aria-label="Volver"
                    title="Volver"
                >
                    <FiArrowLeft />
                </button>

                <div className="wa-profile-side__title">Perfil</div>

                <button
                    className="wa-profile-side__close"
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar perfil"
                    title="Cerrar"
                >
                    <FiX />
                </button>
            </header>

            <div className="wa-profile-side__content">
                <div className="wa-profile-side__avatar">
                    {me.avatarUrl ? (
                        <img src={me.avatarUrl} alt={me.name} />
                    ) : (
                        <div className="wa-profile-side__avatarFallback">LP</div>
                    )}
                </div>

                <div className="wa-profile-side__block">
                    <div className="wa-profile-side__label">Nombre</div>
                    <div className="wa-profile-side__value">{me.name}</div>
                </div>

                <div className="wa-profile-side__block">
                    <div className="wa-profile-side__label">Info.</div>
                    <div className="wa-profile-side__value">{me.about}</div>
                </div>

                <div className="wa-profile-side__block">
                    <div className="wa-profile-side__label">Teléfono</div>
                    <div className="wa-profile-side__value wa-profile-side__value--row">
                        <span>{me.phone}</span>
                        <span className="wa-profile-side__copy" title="Copiar">
                            <FiCopy size={16} />
                         </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
