import { ReactComponent as IllustrationDesktop } from "../../assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as IllustrationMobile } from "../../assets/images/illustration-sign-up-mobile.svg";
import { ReactComponent as IconList } from "../../assets/images/icon-list.svg";
import { useContext, useState } from 'react';
import { AuthenticationContext } from "../../contexts/authentication.context";
import { WindowDimensionsContext } from "../../contexts/window-dimensions.context";

import "./sign-up-form.styles.scss";

const SignUpForm = () => {
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const { email, setEmail, submissionSuccess, setSubmissionSuccess } = useContext(AuthenticationContext);
    const { windowDimensions }= useContext(WindowDimensionsContext);

    const updateEmail = (event) => {
        isInvalidEmail && setIsInvalidEmail(!isInvalidEmail);
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(emailRegex)) {
            !submissionSuccess && setSubmissionSuccess(!submissionSuccess);
        } else {
            setIsInvalidEmail(true);
        }
    };

    return (
        <div className="main-container">
            {
                windowDimensions.width < 500
                    && <div className="illustration-container">
                        <IllustrationMobile className="illustration-svg" />
                    </div>
            }
            <div className="info-container">
                <h1 className="header">Stay updated!</h1>
                <div className="intro">
                    Join 60,000+ product managers receiving monthly updates on:
                </div>
                <div className="list">
                    <div className="list-item"><IconList />Product discovery and building what matters</div>
                    <div className="list-item"><IconList />Measuring to ensure updates are a success</div>
                    <div className="list-item"><IconList />And much more!</div>
                </div>
                <form action="post" className="email-container" onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email address
                        {
                            isInvalidEmail && <div className="email-error-msg">Valid email required</div>
                        }
                    </label>
                    <input
                        name="email"
                        placeholder="email@company.com"
                        value={email}
                        onInput={updateEmail}
                        className={`${isInvalidEmail && 'error'}`}/>
                    <button type='submit'>
                        Subscribe to monthly newsletter
                    </button>
                </form>
            </div>
            {
                windowDimensions.width >= 500
                    && <div className="illustration-container">
                        <IllustrationDesktop className="illustration-svg" />
                    </div>
            }
        </div>
    );
};

export default SignUpForm;