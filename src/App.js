import SignUpForm from './components/sign-up-form/sign-up-form.component';
import SuccessScreen from './components/success-screen/success-screen.component';
import { useContext } from 'react';
import { AuthenticationContext } from './contexts/authentication.context';

import './App.scss';

const App = () => {
  const { submissionSuccess } = useContext(AuthenticationContext);

  return (
    <div className="background-container">
      {
        !submissionSuccess ?
          <SignUpForm/>
          : <SuccessScreen/>
      }
    </div>
  );
}

export default App;
