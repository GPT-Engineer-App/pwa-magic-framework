import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL and Key must be provided.");
  throw new Error("Supabase URL and Key must be provided.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * ### event
 *
 * | name       | type        | format | required |
 * |------------|-------------|--------|----------|
 * | id         | int8        | number | true     |
 * | name       | text        | string | true     |
 * | created_at | timestamptz | string | true     |
 * | date       | date        | string | true     |
 */

/**
 * Create a new record in the specified table.
 * @param {string} table - The table name.
 * @param {Object} data - The data to insert.
 * @returns {Promise<Object>} - The inserted record.
 */
export async function createRecord(table, data) {
  const { data: record, error } = await supabase.from(table).insert([data]).single();
  if (error) throw error;
  return record;
}

/**
 * Fetch records from the specified table.
 * @param {string} table - The table name.
 * @param {Object} [query] - Optional query parameters.
 * @returns {Promise<Array>} - The fetched records.
 */
export async function fetchRecords(table, query = {}) {
  const { data: records, error } = await supabase.from(table).select().match(query);
  if (error) throw error;
  return records;
}

/**
 * Update a record in the specified table.
 * @param {string} table - The table name.
 * @param {Object} query - The query to match the record to update.
 * @param {Object} data - The data to update.
 * @returns {Promise<Object>} - The updated record.
 */
export async function updateRecord(table, query, data) {
  const { data: record, error } = await supabase.from(table).update(data).match(query).single();
  if (error) throw error;
  return record;
}

/**
 * Delete a record from the specified table.
 * @param {string} table - The table name.
 * @param {Object} query - The query to match the record to delete.
 * @returns {Promise<Object>} - The deleted record.
 */
export async function deleteRecord(table, query) {
  const { data: record, error } = await supabase.from(table).delete().match(query).single();
  if (error) throw error;
  return record;
}

/**
 * Subscribe to real-time updates for the specified table.
 * @param {string} table - The table name.
 * @param {function} callback - The callback function to handle updates.
 */
export function subscribeToTable(table, callback) {
  return supabase
    .channel(`public:${table}`)
    .on('postgres_changes', { event: '*', schema: 'public', table }, callback)
    .subscribe();
}