export type Position = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Positions = {
  [key: number]: Position;
};

export interface ImageObject {
  id: number;
  url: string;
}
export type StateType = {
  texts: { id: number; text: string; isEditing: boolean }[];
  images: ImageObject[];
}[];
