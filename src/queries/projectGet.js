import supabaseClient from "./supabaseClient.js";

const projectGet = async (id) => {
  const { data, error } = await supabaseClient
    .from('project')
    .select('title, id')
    .eq({ id })
    .maybeSingle();

  return data;
}

export default projectGet;