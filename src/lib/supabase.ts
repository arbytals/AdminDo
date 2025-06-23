import { createBrowserClient } from "@supabase/ssr";
import { supabaseConfig } from "./supabase/config";

export const createClient = () => {
  return createBrowserClient(
    supabaseConfig.url,
    supabaseConfig.anonKey,
    supabaseConfig.options
  );
};
