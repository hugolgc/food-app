import { ref } from 'vue';
import { useServer } from '../servers';
import { defineStore as useService } from 'pinia';
import type { Receipt } from '../interfaces/receipt';

export const useReceiptService = useService('receipt', () => {
  const receiptServer = useServer('receipts');
  const receipts = ref<Receipt[]>([]);

  function getAll(): void {
    receiptServer.get<{ records: Receipt[] }>('')
    .then(({ records }) => receipts.value = records)
    .catch(e => console.error(e));
  }

  return { receipts, getAll }
});