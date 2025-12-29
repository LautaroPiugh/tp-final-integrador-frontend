const nowISO = () => new Date().toISOString();

const contact_data = [
    { contact_id: 1,  contact_name: "María López",   contact_avatar: "", contact_unseen_messages: 2, last_message_content: "¿Cómo venimos?", last_message_state: "RECEIVED", last_message_created_at: nowISO() },
    { contact_id: 2,  contact_name: "Juan Pérez",    contact_avatar: "", contact_unseen_messages: 0, last_message_content: "Dale, perfecto.", last_message_state: "SEEN", last_message_created_at: nowISO() },
    { contact_id: 3,  contact_name: "Sofi",          contact_avatar: "", contact_unseen_messages: 1, last_message_content: "jajaja", last_message_state: "RECEIVED", last_message_created_at: nowISO() },
    { contact_id: 4,  contact_name: "DPV - Zona 1",  contact_avatar: "", contact_unseen_messages: 0, last_message_content: "Te paso el detalle.", last_message_state: "SEEN", last_message_created_at: nowISO() },
    { contact_id: 5,  contact_name: "Diego R.",      contact_avatar: "", contact_unseen_messages: 1, last_message_content: "¿Tenés un minuto?", last_message_state: "RECEIVED", last_message_created_at: nowISO() },
    { contact_id: 6,  contact_name: "Carla",         contact_avatar: "", contact_unseen_messages: 0, last_message_content: "Gracias!", last_message_state: "SEEN", last_message_created_at: nowISO() },
    { contact_id: 7,  contact_name: "Grupo Asado",   contact_avatar: "", contact_unseen_messages: 1, last_message_content: "¿Sábado o domingo?", last_message_state: "RECEIVED", last_message_created_at: nowISO() },
    { contact_id: 8,  contact_name: "Nico",          contact_avatar: "", contact_unseen_messages: 0, last_message_content: "Te mando el link.", last_message_state: "SEEN", last_message_created_at: nowISO() },
    { contact_id: 9,  contact_name: "Denise",        contact_avatar: "", contact_unseen_messages: 0, last_message_content: "❤️", last_message_state: "SEEN", last_message_created_at: nowISO() },
    { contact_id: 10, contact_name: "Mati",          contact_avatar: "", contact_unseen_messages: 1, last_message_content: "¿Qué onda el deploy?", last_message_state: "RECEIVED", last_message_created_at: nowISO() }
];

export default contact_data;
