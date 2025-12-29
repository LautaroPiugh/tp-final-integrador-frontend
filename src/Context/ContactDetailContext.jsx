import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getContactById } from "../services/contactService";
import message_data from "../data/messageData";

export const ContactDetailContext = createContext(null);

export default function ContactDetailContextProvider() {
    const { contact_id } = useParams();

    const [contactSelected, setContactSelected] = useState(null);
    const [loadingContact, setLoadingContact] = useState(false);
    const [messages, setMessages] = useState([]);

    const numericId = useMemo(() => Number(contact_id), [contact_id]);

    const loadContactById = useCallback(() => {
        if (!contact_id) return;

        setLoadingContact(true);

        const contact = getContactById(contact_id);
        setContactSelected(contact ?? null);

        setMessages(message_data?.[numericId] ?? []);
        setLoadingContact(false);
    }, [contact_id, numericId]);

    useEffect(() => {
        loadContactById();
    }, [loadContactById]);

    const sendMessage = useCallback(
        (content) => {
            const trimmed = String(content ?? "").trim();
            if (!trimmed || !contact_id) return;

            const newMsg = {
                message_id: `${contact_id}-${Date.now()}`,
                direction: "sent",
                content: trimmed,
                created_at: new Date().toISOString(),
            };

            setMessages((prev) => [...prev, newMsg]);
        },
        [contact_id]
    );

    const providerValues = useMemo(
        () => ({
            contactSelected,
            loadingContact,
            messages,
            sendMessage,
        }),
        [contactSelected, loadingContact, messages, sendMessage]
    );

    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    );
}
