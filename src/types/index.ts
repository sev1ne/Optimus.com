export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface PostItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}
