import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Editor from "./pages/Editor/Editor";

const supabase = createClient(
  "https://gdttmvsxqmhkmrknmenj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkdHRtdnN4cW1oa21ya25tZW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMDYzMDYsImV4cCI6MjAxNjc4MjMwNn0.OaqK5Un1IxLX4g_5qTsqtEHP_DTwCTOXwr2VGNuz1eU"
);
import "spectre.css";
import "./App.css";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="auth__container bg-secondary">
        <Auth
          supabaseClient={supabase}
          providers={[]}
          dark
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#5755d9",
                  brandAccent: "#303742",
                },
              },
            },
          }}
          theme="dark"
        />
      </div>
    );
  } else {
    return <Editor supabaseClient={supabase} session={session} />;
  }
}

export default App;
