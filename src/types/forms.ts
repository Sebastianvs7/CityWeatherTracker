import { City } from './user';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  phoneNumber: string;
  cities: City[];
}

export interface ProfileFormData {
  email: string;
  password: string;
  phoneNumber: string;
  cities: City[];
}

export interface SearchFormData {
  cityName: string;
}

export interface SaveCityFormData {
  postCode: string;
}

