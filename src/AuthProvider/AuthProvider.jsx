import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [estate, setEstate] = useState(null);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
console.log(user)
  const updateUserProfile = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        // Profile updated!
        alert("updated successfully");
        // ...
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
        // ...
      });
  };

  const GoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const GitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Fahmudul/estate-info/main/privateislands.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setEstate(data));
  // }, []);
  // console.log(estate);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // console.log("changed", currentuser);
        setUser(currentuser);
        // ...
      } else {
        setUser(null);
        // alert("")
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  const authInfo = {
    user,
    signUp,
    logIn,
    logOut,
    GoogleSignIn,
    GitHubSignIn,
    setUser,
    updateUserProfile,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
