export const submitToFormspree = async (
  endpoint: string,
  data: { name: string; email: string; message: string }
): Promise<{ ok: boolean }> => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  return { ok: res.ok };
};
