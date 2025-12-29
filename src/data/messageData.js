const now = () => new Date().toISOString();

const messagesData = {
    1: [
        { message_id: "1-1", direction: "received", content: "Hola Lau, ¿cómo estás?", created_at: now() },
        { message_id: "1-2", direction: "sent", content: "Todo bien, avanzando con el trabajo.", created_at: now() },
        { message_id: "1-3", direction: "received", content: "Buenísimo, ¿llegás con los tiempos?", created_at: now() },
        { message_id: "1-4", direction: "received", content: "¿Cómo venimos?", created_at: now() },
    ],

    2: [
        { message_id: "2-1", direction: "sent", content: "Ahí revisé lo que me pasaste.", created_at: now() },
        { message_id: "2-2", direction: "received", content: "Genial, era eso nomás.", created_at: now() },
        { message_id: "2-3", direction: "sent", content: "Dale, perfecto.", created_at: now() },
    ],

    3: [
        { message_id: "3-1", direction: "sent", content: "No puedo creer lo de hoy 😂", created_at: now() },
        { message_id: "3-2", direction: "received", content: "Mal, fue cualquiera", created_at: now() },
        { message_id: "3-3", direction: "sent", content: "Encima nadie entendía nada", created_at: now() },
        { message_id: "3-4", direction: "received", content: "jajaja", created_at: now() },
    ],

    4: [
        { message_id: "4-1", direction: "received", content: "Estamos armando el informe mensual.", created_at: now() },
        { message_id: "4-2", direction: "sent", content: "Perfecto, quedo atento.", created_at: now() },
        { message_id: "4-3", direction: "received", content: "Te paso el detalle.", created_at: now() },
    ],

    5: [
        { message_id: "5-1", direction: "received", content: "Hola, ¿andás por ahí?", created_at: now() },
        { message_id: "5-2", direction: "sent", content: "Sí, decime.", created_at: now() },
        { message_id: "5-3", direction: "received", content: "¿Tenés un minuto?", created_at: now() },
    ],

    6: [
        { message_id: "6-1", direction: "sent", content: "Listo, ya quedó cargado.", created_at: now() },
        { message_id: "6-2", direction: "received", content: "Ahí lo vi, impecable.", created_at: now() },
        { message_id: "6-3", direction: "sent", content: "Gracias!", created_at: now() },
    ],

    7: [
        { message_id: "7-1", direction: "received", content: "Che, ¿cuándo hacemos el asado?", created_at: now() },
        { message_id: "7-2", direction: "received", content: "Yo puedo el sábado", created_at: now() },
        { message_id: "7-3", direction: "sent", content: "A mí me da igual", created_at: now() },
        { message_id: "7-4", direction: "received", content: "¿Sábado o domingo?", created_at: now() },
    ],

    8: [
        { message_id: "8-1", direction: "received", content: "¿Tenés el repo del proyecto?", created_at: now() },
        { message_id: "8-2", direction: "sent", content: "Sí, ahora te lo busco.", created_at: now() },
        { message_id: "8-3", direction: "sent", content: "Te mando el link.", created_at: now() },
    ],

    9: [
        { message_id: "9-1", direction: "sent", content: "Llegué bien ❤️", created_at: now() },
        { message_id: "9-2", direction: "received", content: "Me alegro un montón", created_at: now() },
        { message_id: "9-3", direction: "sent", content: "❤️", created_at: now() },
    ],

    10: [
        { message_id: "10-1", direction: "received", content: "¿Subiste algo a producción?", created_at: now() },
        { message_id: "10-2", direction: "sent", content: "Todavía no, estoy probando.", created_at: now() },
        { message_id: "10-3", direction: "received", content: "¿Qué onda el deploy?", created_at: now() },
    ],
};

export default messagesData;
