// import { createClient } from "@supabase/supabase-js";

// const supabaseClient = createClient(
//   process.env.REACT_APP_SUPABASE_URL as string,
//   process.env.REACT_APP_SUPABASE_KEY as string
// );

// export default supabaseClient;

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, "johndoe@test.com", "test123")
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export default createUserWithEmailAndPassword;
