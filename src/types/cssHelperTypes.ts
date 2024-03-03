export enum HeadingColorEnum {
  primary = 'text-green-600',
  secondary = 'text-gray-50',
}

export type HeadingColorType = keyof typeof HeadingColorEnum;

export enum ParagraphColorEnum {
  primary = 'text-gray-600',
  secondary = 'text-green-100',
}

export type ParagraphColorType = keyof typeof ParagraphColorEnum;

export enum ParagraphSizeEnum {
  large = 'text-lg',
  medium = 'text-md',
  small = 'text-sm',
}

export type ParagraphSizeType = keyof typeof ParagraphSizeEnum;
