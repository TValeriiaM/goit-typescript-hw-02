export interface Params {
  client_id: string;
  query: string;
  orientation: string;
  page: number;
  per_page: number;
};

export interface Image {
    id: string;
    description: string
    urls: {
        small: string;
        regular: string;
    }    
}
