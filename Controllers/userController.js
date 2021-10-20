const { supabase } = require('../utils/supabaseClient');

const doSignUp = async (email, password) => {
  const { user, session, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Error signing up.', error);
  }
  return { user, session };
};

const doSignIn = async (email, password) => {
  const { user, session, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    console.error('Error signing up.', error);
  }
  return { user, session };
};

const doSignOut = async (email, password) => {
  const { error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    console.error('Error signing up.', error);
  }
  return null;
};

module.exports = {
  doSignIn,
  doSignOut,
  doSignUp,
};
