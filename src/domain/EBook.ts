import Book from './Book';

export default class EBook extends Book {
  readonly single: boolean;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
  ) {
    super(id, name, author, price, pages);
    this.single = true;
  }
}
