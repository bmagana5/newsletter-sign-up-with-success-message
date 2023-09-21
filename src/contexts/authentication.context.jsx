import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
    email: '',
    setEmail: () => {},
    submissionSuccess: false,
    setSubmissionSuccess: () => {}
});

export const AuthenticationProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const value = {
        email, setEmail,
        submissionSuccess, setSubmissionSuccess
    };

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
};