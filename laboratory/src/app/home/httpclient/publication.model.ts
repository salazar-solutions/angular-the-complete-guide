export type Publication = {
  id?: string;
  title: string;
  content: string;
};

export class DefaultPublication implements Publication {
  id?: string;
  title: string = '';
  content: string = '';

  constructor(init?: Partial<Publication>) {
    Object.assign(this, init);
  }
}
