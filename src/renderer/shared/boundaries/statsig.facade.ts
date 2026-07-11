// @ts-nocheck
// Restored from ref/webview/assets/statsig.facade.js
// Boundary facade bridging restored imports to existing src/ runtime boundaries.
// Placeholder boundary facade for statsig.
export const useFeatureGate = (_gateId: string): boolean => false;
export const StatsigProvider = ({ children }: { children?: any }) => children;
export const StatsigSession = {};
export const useClientAsyncInit = () => ({ isLoading: false });
