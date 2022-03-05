import supabaseClient from "./supabaseClient.js";

const contractPost = async (project, name, id) => {
  let query = supabaseClient
    .from('contract')
    .select('*')
  
  if (project) query = query.eq('project_id', project.id)
  if (name) query = query.eq('name', name)
  if (id) query = query.eq('id', id)

  const { data, error } = await query;

  if (error) {
    console.log(error)
  }
  
  return data || [];
}

export default contractPost;