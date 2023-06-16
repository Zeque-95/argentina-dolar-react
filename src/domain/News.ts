export interface INews {
  readonly content: string;
  readonly href: string;
  readonly image: string;
  readonly title: string;
}

export class News {
  readonly content: string;
  readonly href: string;
  readonly image: string;
  readonly title: string;

  constructor(args: INews) {
    this.content = args.content;
    this.href = args.href;
    this.image = args.image;
    this.title = args.title;
  }
}
