import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import ContactSidebar from "../ContactSidebar/ContactSidebar";
import ProfileSidebar from "../Profile/ProfileSideBar";
import "./AppLayout.css";

export default function AppLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    const isChatRoute = useMemo(() => {
        return location.pathname.includes("/chat/") && location.pathname.includes("/messages");
    }, [location.pathname]);

    const isProfileRoute = useMemo(() => {
        return location.pathname.startsWith("/profile");
    }, [location.pathname]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key !== "Escape") return;

            if (isProfileRoute) {
                navigate("/", { replace: true });
                return;
            }

            if (isChatRoute) {
                navigate("/", { replace: true });
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isChatRoute, isProfileRoute, navigate]);

    return (
        <div
            className={
                "wa-app" +
                (isChatRoute ? " wa-app--chat" : "") +
                (isProfileRoute ? " wa-app--profile" : "")
            }>
            <aside className="wa-sidebar">
                {isProfileRoute ? <ProfileSidebar /> : <ContactSidebar />}
            </aside>

            <main className="wa-main">
                <Outlet />
            </main>
        </div>
    );
}
