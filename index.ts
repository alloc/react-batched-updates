let impl: typeof batchedUpdates = cb => cb()

/**
 * Batching for subsequent React updates made away from React's lifecycle,
 * like `Promise` and `setTimeout` callbacks.
 *
 * There's no point in using this from `useEffect` or built-in event props
 * like `onClick`, since React already does it for you, **but only for your
 * synchronous code.**
 *
 * Libraries should call `setBatchedUpdates` to inject the appropriate,
 * platform-specific implementation.
 */
export const batchedUpdates = (cb: () => void): void => impl(cb)

export const setBatchedUpdates = (batchedUpdates: typeof impl) =>
  (impl = batchedUpdates)
