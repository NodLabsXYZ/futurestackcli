import supabaseClient from "./supabaseClient.js";

const contractPost = async (data) => {
  const { body, error } = await supabaseClient
    .from('contract')
    .insert(data);

  if (error) {
    console.log(error)
  }
  
  return body;
}

export default contractPost;