import contact_data from "../data/contactData";

export function getContactList() {
    return contact_data;
}

export function getContactById(contact_id) {
    const id = Number(contact_id);
    return contact_data.find((c) => Number(c.contact_id) === id) ?? null;
}
