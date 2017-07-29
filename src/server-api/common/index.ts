const s4 = () => Math.random().toString(16).slice(-4);

export const createGUID = () =>
  s4() + s4() + '-' + s4() +
  '-' + s4() + '-' + s4() +
  '-' + s4() + s4() + s4();

export interface Address {
  country: string;
  province: string;
  city: string;
  building: string;
}
