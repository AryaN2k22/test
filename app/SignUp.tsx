import '@aws-amplify/ui-react/styles.css';
import {
  Authenticator,
  View,
  Button,
  useAuthenticator,
} from '@aws-amplify/ui-react';

export default function App() {
  const components = {
    SignIn: {
      Footer() {
        const { toForgotPassword } = useAuthenticator();
        return (
          <View textAlign="center">
            <Button fontWeight="normal" onClick={toForgotPassword} size="small">
              Forgot Password???
            </Button>
          </View>
        );
      },
    },
  };

  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
