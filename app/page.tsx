"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  View,
  Button,
  useAuthenticator,
  SelectField,
} from "@aws-amplify/ui-react";
Amplify.configure(outputs);
// const client = generateClient<Schema>();

export default function App() {
  const components = {
    SignIn: {
      
      Footer() {
        const { toForgotPassword } = useAuthenticator();
        return (
          <View textAlign="center">
            <Button fontWeight="normal" onClick={toForgotPassword} size="small">
              Forgot Password?
            </Button>
          </View>
        );
      },
    },
  };

  return (
    <Authenticator initialState="signUp" components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <SelectField label="Fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="zucchini" disabled>
              Zucchini
            </option>
          </SelectField>
        </main>
      )}
    </Authenticator>
  );
}
