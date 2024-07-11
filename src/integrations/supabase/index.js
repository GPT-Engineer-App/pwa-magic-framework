import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Supabase Table Definitions
 * 
 * ### counts
 * 
 * | name       | type        | format | required |
 * |------------|-------------|--------|----------|
 * | id         | int8        | number | true     |
 * | type       | text        | string | true     |
 * | count      | int8        | number | true     |
 * | created_at | timestamptz | string | true     |
 */

export const fetchCounts = async (type) => {
  const { data, error } = await supabase
    .from('counts')
    .select('*')
    .eq('type', type);

  if (error) {
    throw error;
  }

  return data;
};

export const insertCount = async (type, count) => {
  const { data, error } = await supabase
    .from('counts')
    .insert([{ type, count }]);

  if (error) {
    throw error;
  }

  return data;
};

export const updateCount = async (id, count) => {
  const { data, error } = await supabase
    .from('counts')
    .update({ count })
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};

export const deleteCount = async (id) => {
  const { data, error } = await supabase
    .from('counts')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};