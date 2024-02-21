export enum HeadingColorEnum {
  primary = 'text-emerald-600',
  secondary = 'text-emerald-50',
}

export type HeadingColorType = keyof typeof HeadingColorEnum;

export enum ParagraphColorEnum {
  primary = 'text-neutral-600',
  secondary = 'text-neutral-100',
}

export type ParagraphColorType = keyof typeof ParagraphColorEnum;

export enum ParagraphSizeEnum {
  large = 'text-lg',
  medium = 'text-md',
  small = 'text-sm',
}

export type ParagraphSizeType = keyof typeof ParagraphSizeEnum;
