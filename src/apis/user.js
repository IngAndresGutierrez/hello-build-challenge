/* import external modules */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signUpApi = (user, password) => {
  return signInWithEmailAndPassword(auth, user, password)
}

export const loginApi = (user, password) => {
  return signInWithEmailAndPassword(auth, user, password)
}
