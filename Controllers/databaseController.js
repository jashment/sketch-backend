const { supabase } = require('../utils/supabaseClient');

const doSave = async (uuid, sketch) => {
  const { data, error } = await supabase
    .from('Sketch')
    .insert([
      { user_id: uuid, url: sketch },
    ]);

  if (error) {
    console.error('Error saving data.', error);
  }
  return data;
};

const doRetrieveFromDB = async (uuid) => {
  const { data, error } = await supabase
    .from('Sketch')
    .select()
    .eq('user_id', uuid);

  if (error) {
    console.error('Error retrieving data.', error);
  }
  return data;
};

const doDeleteFromDB = async (uuid, sketchId) => {
  const { data, error } = await supabase
    .from('Sketch')
    .delete()
    .eq('user_id', uuid)
    .eq('id', sketchId);

  if (error) {
    console.error('Error retrieving data.', error);
  }
  return data;
};

module.exports = {
  doDeleteFromDB,
  doRetrieveFromDB,
  doSave,
};
