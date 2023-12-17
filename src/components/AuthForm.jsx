"use client";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthForm = (props) => {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo="https://to-do-rho-ten.vercel.app/.app/auth/callback"
      appearance={{
        button: {
          className: "bg-white-400 text-gray-900 bg-white-100",
        },
        input: {
          className: "bg-gray-700 text-white border-gray-600",
        },
      }}
    />
  );
};

export default AuthForm;
