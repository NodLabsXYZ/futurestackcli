import supabaseClient from "./supabaseClient.js";

const contractUpsert = async (data) => {
  const { body, error } = await supabaseClient
    .from('contract')
    .upsert(data);

  if (error) {
    console.log(error)
  }
  
  return body;
}

export default contractUpsert;