const ACCESS_KEY = 'Drishhya_access_granted';
const MOBILE_KEY = 'Drishhya_mobile';
const PACK_KEY = 'Drishhya_pack';

export type SubscriptionPack = 'weekly' | 'monthly';

export const PACKS = {
  weekly: { id: 'weekly' as const, label: 'Weekly', price: 79, period: '7 days' },
  monthly: { id: 'monthly' as const, label: 'Monthly', price: 199, period: '30 days' },
};

export const hasSubscriptionAccess = (): boolean =>
  localStorage.getItem(ACCESS_KEY) === 'true';

export const getStoredMobile = (): string | null => localStorage.getItem(MOBILE_KEY);

export const getStoredPack = (): SubscriptionPack | null => {
  const pack = localStorage.getItem(PACK_KEY);
  return pack === 'weekly' || pack === 'monthly' ? pack : null;
};

export const grantSubscriptionAccess = (mobile: string, pack: SubscriptionPack) => {
  localStorage.setItem(ACCESS_KEY, 'true');
  localStorage.setItem(MOBILE_KEY, mobile);
  localStorage.setItem(PACK_KEY, pack);
};

export const clearSubscriptionAccess = () => {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(MOBILE_KEY);
  localStorage.removeItem(PACK_KEY);
};

export const isValidMobile = (value: string) => /^\d{10}$/.test(value);
