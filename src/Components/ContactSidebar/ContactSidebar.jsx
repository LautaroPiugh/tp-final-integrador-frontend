import "./ContactSidebar.css";
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm";
import ContactList from "../ContactList/ContactList";
import SidebarMenu from "./SidebarMenu";
import { FaWhatsapp } from "react-icons/fa";

import { MdChat, MdDonutLarge, MdGroups, MdSettings } from "react-icons/md";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function ContactSidebar() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("all");

    return (
        <div className="wa-sidebar-wrap">
            <nav className="wa-rail" aria-label="Barra lateral">
                <button className="wa-rail__btn" title="Chats" type="button">
                    <MdChat />
                </button>

                <button className="wa-rail__btn" title="Estados" type="button">
                    <MdDonutLarge />
                </button>

                <button className="wa-rail__btn" title="Canales" type="button">
                    <HiOutlineMegaphone />
                </button>

                <button className="wa-rail__btn" title="Comunidades" type="button">
                    <MdGroups />
                </button>

                <div className="wa-rail__spacer" />

                <button className="wa-rail__btn" title="Ajustes" type="button">
                    <MdSettings />
                </button>

                <div
                    className="wa-rail__avatar"
                    title="Perfil"
                    role="button"
                    tabIndex={0}
                    aria-label="Abrir perfil"
                    onClick={() => navigate("/profile")}
                    onKeyDown={(e) => e.key === "Enter" && navigate("/profile")}>
                    <img src="/me.jpg" alt="Perfil" className="wa-rail__avatar-img"/>
                </div>

            </nav>

            <section className="wa-side">
                <header className="wa-side__top">
                    <div className="wa-side__title">
                        <FaWhatsapp style={{ marginRight: 8, verticalAlign: "middle" }} />
                        WhatsApp
                    </div>

                    <div className="wa-side__actions">
                        <button className="wa-icon-btn" title="Nuevo chat" type="button">
                            <FiEdit />
                        </button>

                        <SidebarMenu />
                    </div>
                </header>

                <ContactSearchForm />

                <div className="wa-filters">
                    <button
                        className={`wa-pill ${filter === "all" ? "wa-pill--active" : ""}`}
                        onClick={() => setFilter("all")}
                        type="button">
                        Todos
                    </button>

                    <button
                        className={`wa-pill ${filter === "unread" ? "wa-pill--active" : ""}`}
                        onClick={() => setFilter("unread")}
                        type="button">
                        No leídos
                    </button>

                    <button
                        className={`wa-pill ${filter === "favorites" ? "wa-pill--active" : ""}`}
                        onClick={() => setFilter("favorites")}
                        type="button">
                        Favoritos
                    </button>

                    <button
                        className={`wa-pill ${filter === "groups" ? "wa-pill--active" : ""}`}
                        onClick={() => setFilter("groups")}
                        type="button">
                        Grupos
                    </button>
                </div>

                <div className="wa-side__list">
                    <ContactList filter={filter} />
                </div>
            </section>
        </div>
    );
}
