import { supabase, createRecord, fetchRecords, updateRecord, deleteRecord } from '../integrations/supabase/index.js';

describe('Supabase CRUD Operations', () => {
  const table = 'event';
  let recordId;

  it('should create a new record', async () => {
    const data = { name: 'Test Event', date: '2023-10-01' };
    const record = await createRecord(table, data);
    expect(record).toHaveProperty('id');
    expect(record.name).toBe(data.name);
    recordId = record.id;
  });

  it('should fetch records', async () => {
    const records = await fetchRecords(table);
    expect(records.length).toBeGreaterThan(0);
  });

  it('should update a record', async () => {
    const data = { name: 'Updated Test Event' };
    const record = await updateRecord(table, { id: recordId }, data);
    expect(record.name).toBe(data.name);
  });

  it('should delete a record', async () => {
    const record = await deleteRecord(table, { id: recordId });
    expect(record.id).toBe(recordId);
  });
});