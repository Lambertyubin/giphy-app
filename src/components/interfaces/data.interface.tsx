export interface IRendition {
  url: string;
}
export interface IData {
  id: string;
  images: IImages;
  title: string;
}

export interface IModalImageData {
  urls: IImageUrl[];
  title: string;
}

export interface IImageUrl {
  url?: string;
  height: string;
  width: string;
  mp4?: string;
}

export interface IGiphyData {
  data: IData[];
}

export interface IDataItem {
  item: IData;
}

export interface IContext {
  data: IData[];
  allData: IData[];
  isError: boolean;
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalDataSize: number;
  handleSearchSubmit(query: string): void;
  handlePageChange(page: number): void;
}

export interface IImages {
  downsized: { url: string; height: string; width: string };
  downsized_large: { url: string; height: string; width: string };
  downsized_medium: { url: string; height: string; width: string };
  downsized_small: { url: string; height: string; width: string };
  downsized_still: { url: string; height: string; width: string };
  fixed_height: { url: string; height: string; width: string };
  fixed_height_downsampled: { url: string; height: string; width: string };
  fixed_height_small: { url: string; height: string; width: string };
  fixed_height_small_still: { url: string; height: string; width: string };
  fixed_height_still: { url: string; height: string; width: string };
  fixed_width: { url: string; height: string; width: string };
  fixed_width_downsampled: { url: string; height: string; width: string };
  fixed_width_small: { url: string; height: string; width: string };
  fixed_width_small_still: { url: string; height: string; width: string };
  fixed_width_still: { url: string; height: string; width: string };
  looping: { url: string; height: string; width: string };
  original_mp4: { url: string; height: string; width: string };
  original_still: { url: string; height: string; width: string };
  preview: { url: string; height: string; width: string };
  preview_gif: { url: string; height: string; width: string };
  preview_webp: { url: string; height: string; width: string };
  ["480w_still"]: { url: string; height: string; width: string };
}
