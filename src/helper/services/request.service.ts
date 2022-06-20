export const RequestService = {
  get: async (url: string): Promise<string | null> => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return res.json();
  },
};
