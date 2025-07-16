export const fakeApi = <T>(data: T, delay = 600): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));