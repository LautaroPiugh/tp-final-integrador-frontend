import "./ProfileScreen.css";
import { FiUser } from "react-icons/fi";

export default function ProfileScreen() {
    return (
        <div className="wa-profile-main" role="region" aria-label="Perfil">
            <div className="wa-profile-main__center">
                <FiUser className="wa-profile-main__icon" aria-hidden="true" />
                <div className="wa-profile-main__title">Perfil</div>
            </div>
        </div>
    );
}
