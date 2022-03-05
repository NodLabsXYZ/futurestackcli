import supabaseClient from "./supabaseClient.js";

const projectsGet = async () => {
  const { data, error } = await supabaseClient
    .from('project')
    .select('title, id')

  return data || [];
}

export default projectsGet;