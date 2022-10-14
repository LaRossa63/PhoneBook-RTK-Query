export enum Api {
  baseUrl = 'https://6345abff39ca915a69056181.mockapi.io/',

  typeContacts = '',
  contacts = '/contacts',
}

export interface Contact {
  id: string;
  name: string;
  number: string;
}
