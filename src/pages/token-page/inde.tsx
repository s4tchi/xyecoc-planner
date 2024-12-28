import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TokenPage() {
    const navigate = useNavigate();
    const { token } = useParams();

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            navigate("/");
        }
    }, [navigate, token]);

    return <div>TokenPage</div>;
}