import { useState, useEffect } from "react";
import { validateForm } from "../utils/validation";
import { formData } from "../utils/formData";
import { Input } from "../components";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import useBrowse from "../customHooks/useBrowse";

const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [data, setData] = useState(formData);
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    password: "",
    signIn: "",
    signUp: "",
  });

  // calling of useBrowse hook
  useBrowse(true);

  const clearErrorMsg = () => {
    setTimeout(() => {
      setErrorMsg({
        name: "",
        email: "",
        password: "",
        signIn: "",
        signUp: "",
      });
    }, 3000);
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    const clonedData = JSON.parse(JSON.stringify(data));
    const currentObj = clonedData.find((obj) => obj.name === id);
    currentObj.value = value;
    setData(clonedData);
  };

  const onClickHandler = () => {
    let isValid = true;
    const clonedData = JSON.parse(JSON.stringify(data));
    const ClonedErrorMsg = JSON.parse(JSON.stringify(errorMsg));
    clonedData.map((obj) => {
      let errorMessage = "";
      if (isSignIn) {
        if (obj.name !== "name") {
          errorMessage = validateForm(obj.name, obj.value);
          ClonedErrorMsg[obj.name] = errorMessage;
          if (errorMessage) isValid = false;
        }
      } else {
        errorMessage = validateForm(obj.name, obj.value);
        ClonedErrorMsg[obj.name] = errorMessage;
        if (errorMessage) isValid = false;
      }
    });

    if (isValid) {
      // Go for authentication of user
      if (isSignIn) {
        // if user wants to sign in
        signInWithEmailAndPassword(
          auth,
          clonedData[1].value,
          clonedData[2].value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // set all value fields to empty string
            clonedData.map((obj) => (obj.value = ""));
            setData(clonedData);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const str = errorMessage.slice(22, -2);
            const newStr = str.replace(/-/g, " ");
            ClonedErrorMsg.signIn = newStr;
            setErrorMsg(ClonedErrorMsg);
            clearErrorMsg();
          });
      } else {
        // if user wants to sign up
        createUserWithEmailAndPassword(
          auth,
          clonedData[1].value,
          clonedData[2].value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            // update userName in the backend
            updateProfile(user, {
              displayName: clonedData[0].value,
            })
              .then(() => {
                // Profile updated!
                const { displayName, email, uid } = auth.currentUser;
                disptach(
                  addUser({ displayName: displayName, email: email, uid: uid })
                );
                // set all value fields to empty string
                clonedData.map((obj) => (obj.value = ""));
                // setData(clonedData);
              })
              .catch((error) => {
                // An error occurred
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const str = errorMessage.slice(22, -2);
            const newStr = str.replace(/-/g, " ");
            ClonedErrorMsg.signUp = newStr;
            setErrorMsg(ClonedErrorMsg);
            clearErrorMsg();
          });
      }
    } else {
      setErrorMsg(ClonedErrorMsg);
      clearErrorMsg();
    }
  };

  return (
    <div className=" w-3/4 mt-8 sm:w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 rounded px-8 pt-6 pb-8 z-50">
      {errorMsg && (
        <div className="text-red-700 px-4 py-2 mt-2 w-full text-center font-bold transition-all duration-500">
          {Object.entries(errorMsg)?.map(([errorName, errorMessage], i) => {
            if (i > Object.entries(errorMsg).length - 2) return errorMessage;
            let message = errorMessage
              ? Object.entries(errorMsg)[i + 1][1]
                ? errorMessage + ", "
                : errorMessage
              : "";
            return message;
          })}
        </div>
      )}
      <h2 className="text-2xl text-white font-semibold mb-6 text-center">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* looping on form data */}
        {data?.map((obj, i) => {
          if (isSignIn && obj.name === "name") {
            return "";
          } else {
            return (
              <Input
                {...obj}
                onChangeHandler={onChangeHandler}
                key={i}
                errorMsg={errorMsg[obj.name]}
              />
            );
          }
        })}
        <div
          className="button bg-red-500 hover:bg-opacity-80 w-full py-2 px-4 rounded-md text-white text-center transition duration-300 cursor-pointer my-6"
          onClick={onClickHandler}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
      </form>
      {/* the section which ask about are you already a user or new to netfilx */}
      <div className="text-sm text-gray-300 text-center">
        {isSignIn ? "New to Netflix " : " Already have an account? "}
        <span
          className="text-blue-500 hover:text-blue-800 cursor-pointer"
          href="#"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "Sign UP" : "Sign In"}
        </span>
      </div>
    </div>
  );
};

export default Form;
