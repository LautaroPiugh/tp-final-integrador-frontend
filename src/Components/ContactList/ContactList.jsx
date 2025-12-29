import { useContext } from "react";
import "./ContactList.css";
import { NavLink, useSearchParams } from "react-router-dom";
import { ContactListContext } from "../../Context/ContactListContext";

function initials(name = "") {
    const parts = String(name).trim().split(/\s+/).slice(0, 2);
    return parts.map(p => p[0]?.toUpperCase()).join("");
}

export default function ContactList({ filter }) {
    const [searchParams] = useSearchParams();
    const q = (searchParams.get("q") ?? "").trim().toLowerCase();

    const { contactState, loadingContactsState } = useContext(ContactListContext);

    const filtered = q
        ? contactState.filter((c) =>
            String(c.contact_name ?? "").toLowerCase().includes(q)
        )
        : contactState;

    if (loadingContactsState) {
        return <div className="wa-list__loading">Cargando…</div>;
    }

    if (filtered.length === 0) {
        return (
            <div className="wa-list__empty">
                {q ? "No se encontraron contactos." : "No hay contactos."}
            </div>
        );
    }

    let filteredContacts = filtered;

    if (filter === "unread") {
        filteredContacts = filteredContacts.filter(
            (c) => Number(c.contact_unseen_messages) > 0
        );
    }

    if (filter === "favorites") {
        filteredContacts = filteredContacts.filter(
            (c) => c.is_favorite === true
        );
    }

    if (filter === "groups") {
        filteredContacts = filteredContacts.filter(
            (c) => c.is_group === true
        );
    }

    function formatListTime(v) {
        if (!v) return "Ayer";
        const d = v instanceof Date ? v : new Date(v);
        if (Number.isNaN(d.getTime())) return "Ayer";

        const hh = String(d.getHours()).padStart(2, "0");
        const mm = String(d.getMinutes()).padStart(2, "0");
        return `${hh}:${mm}`;
    }

    return (
        <div className="wa-list" aria-label="Listado de chats">
            {filteredContacts.map((c) => (
                <NavLink
                    key={c.contact_id}
                    to={`/chat/${c.contact_id}/messages`}
                    className={({ isActive }) =>
                        "wa-row" + (isActive ? " wa-row--active" : "")
                    }>
                    <div className="wa-row__avatar">
                        {c.contact_avatar ? (
                            <img src={c.contact_avatar} alt={c.contact_name} />
                        ) : (
                            <span>{initials(c.contact_name)}</span>
                        )}
                    </div>

                    <div className="wa-row__mid">
                        <div className="wa-row__top">
                            <div className="wa-row__name">{c.contact_name}</div>
                            <div className="wa-row__time">
                                {formatListTime(c.last_message_created_at)}
                            </div>
                        </div>

                        <div className="wa-row__bottom">
                            <div className="wa-row__preview">
                                {c.last_message_content ?? ""}
                            </div>

                            {Number(c.contact_unseen_messages ?? 0) > 0 && (
                                <div className="wa-row__badge">
                                    {c.contact_unseen_messages}
                                </div>
                            )}
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}
