import { useContext } from "react";
import { ReactComponent as IconList } from "../../assets/images/icon-list.svg";

import "./success-screen.styles.scss";
import { AuthenticationContext } from "../../contexts/authentication.context";

const SuccessScreen = () => {
    const { email, setEmail, submissionSuccess, setSubmissionSuccess } = useContext(AuthenticationContext);
    
    const handleClick = () => {
        setEmail('');
        setSubmissionSuccess(!submissionSuccess);
    };

    return (
        <div className="success-container">
            <div className="icon-container">
                <IconList/>
            </div>
            <h1 className="header">Thanks for subscribing!</h1>
            <div className="paragraph-container">
                A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
            </div>
            <button onClick={handleClick}>Dismiss Message</button>
        </div>
    );
};

export default SuccessScreen;