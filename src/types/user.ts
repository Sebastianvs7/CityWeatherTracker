export interface City {
  name: string;
  address: {
    postCode: string;
  };
}

export interface User {
  email: string;
  password: string;
  phoneNumber: string;
  cities: City[];
}
