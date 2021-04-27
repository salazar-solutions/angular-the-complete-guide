export type Client = {
  email: string;
  firstName: string;
  lastName: String;
  pass: string;
  termsAndConditions: boolean;
  gender: string;
  comments: string;
  directions: {
    street: string;
    number: number;
    state: string;
    country: string;
    cp: number;
    phone: {
      mobile: string;
      house: string;
    };
  };
};
