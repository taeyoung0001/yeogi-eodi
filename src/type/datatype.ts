export type resultDateType =
  | {
      content_ty: null | string;
      country_eng_nm: string;
      country_iso_alp2: string;
      country_nm: string;
      download_url: string;
      origin_file_nm: string;
    }
  | undefined;

export type Gamedata = {
  data: resultDateType;
  answerEx?: resultDateType[];
  fetchData: () => void;
  correctCount: number;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
};
