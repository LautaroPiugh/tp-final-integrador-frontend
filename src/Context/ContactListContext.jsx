import { createContext, useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { getContactList } from "../services/contactService";

export const ContactListContext = createContext();

const ContactListContextProvider = () => {
    const [contactState, setContactState] = useState([]);
    const [loadingContactsState, setLoadingContactState] = useState(true);

    const loadContactList = useCallback(() => {
        setLoadingContactState(true);
        const contact_list = getContactList();
        setContactState(contact_list);
        setLoadingContactState(false);
    }, []);


    useEffect(() => {
        loadContactList();
    }, [loadContactList]);

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
    };

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    );
};

export default ContactListContextProvider;
