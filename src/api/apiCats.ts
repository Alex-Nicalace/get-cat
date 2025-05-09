import type { Cat } from './api.types';

const API_URL = 'https://api.thecatapi.com';

export async function getCat() {
  const res = await fetch(`${API_URL}/v1/images/search`);
  if (!res.ok) throw Error('Не удалось получить кота!!!');
  const data = (await res.json()) as Cat[];
  return data[0];
}
