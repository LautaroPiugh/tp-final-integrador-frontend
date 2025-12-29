import { Route, Routes, Navigate } from 'react-router-dom'
import './global.css'

import AppLayout from './Components/Layout/AppLayout'
import ContactSidebar from './Components/ContactSidebar/ContactSidebar'

import ChatScreen from './Screens/ChatScreen/ChatScreen'
import MessagesScreen from './Screens/MessagesScreen/MessagesScreen'
import ProfileScreen from "./Screens/Profile/ProfileScreen";


import ContactListContextProvider from './Context/ContactListContext'
import ContactDetailContextProvider from './Context/ContactDetailContext'

function App() {
    return (
        <Routes>
            <Route element={<ContactListContextProvider />}>
                <Route element={<AppLayout sidebar={<ContactSidebar />} />}>
                    <Route path="/" element={<ChatScreen />} />

                    <Route element={<ContactDetailContextProvider />}>
                        <Route path="/chat/:contact_id/messages" element={<MessagesScreen />} />
                    </Route>
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
