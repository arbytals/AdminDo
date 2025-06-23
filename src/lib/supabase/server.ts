import { createServerClient as createClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { supabaseConfig } from "./config";

export const createSupabaseServerClient = async () => {
  const cookieStore = await cookies();

  return createClient(supabaseConfig.url, supabaseConfig.anonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (
        cookiesToSet: Array<{ name: string; value: string; options: any }>
      ) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
        });
      },
    },
    global: {
      headers: {
        "x-application-name": "a-help",
      },
    },
    auth: {
      persistSession: false,
    },
    db: {
      schema: "public",
    },
  });
};

// Service role client for webhook operations that need to bypass RLS
export const createSupabaseServiceClient = () => {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY environment variable is required"
    );
  }

  return createSupabaseClient(
    supabaseConfig.url,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      db: {
        schema: "public",
      },
    }
  );
};

export { createClient };
