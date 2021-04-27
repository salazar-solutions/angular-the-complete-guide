import { Publication } from './publication.model';

export type PostPublicationResponse = {
  name: string;
};

export type GetPublicationResponse = {
  [key: string]: Publication;
};
