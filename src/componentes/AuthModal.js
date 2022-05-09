
import { useRef, useState } from "react";
import ReactDom from "react-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ show, onClose }) => {

    const [showForm, setShowForm] = useState('login');

    const modalRef = useRef();

    if (!show) {
        return null;
    }

    const handleClose = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const handleForm = (form) => {
        setShowForm(form);
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10" style={{ top: 0, left: 0 }}>
            {
                showForm === 'login' &&
                <LoginForm changeForm={handleForm} />
            }

            {
                showForm === 'register' &&
                <RegisterForm changeForm={handleForm} />
            }
        </div>
        ,
        document.getElementById("portal")
    );
}

export default AuthModal;