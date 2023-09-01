export type AccountBookHistory = {
  id?: number;
  type: '지출' | '수입';
  price: number;
  comment: string;
  createdAt: number;
  updatedAt: number;
  photoUrl: string | null;
};
