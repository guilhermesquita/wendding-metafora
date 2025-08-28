import { supabase } from "../_supabase/supabaseClient";
import { notFoundError, unknownError } from "./errors/errorConfirm";

export const getUsers = async () => {
  return await supabase.from("Profile").select("*");
};

export const confirmPresence = async (code: string) => {
  const { data, error } = await supabase
    .from("Profile")
    .update({ confirmed: true })
    .eq("code_confirm", code)
    .select();

  if (error) throw new unknownError();
  if (!data || data.length === 0) throw new notFoundError();

  return data;
};
