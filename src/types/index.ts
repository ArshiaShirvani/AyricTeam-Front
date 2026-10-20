export interface Technology {
  id: number;
  name: string;
}

export interface PortfolioImage {
  id: number;
  image: string;
  order: number;
}

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  link: string;
  github_link: string;
  technologies: Technology[];
  images?: PortfolioImage[];
  created_at: string;
  updated_at?: string;
}

export interface TicketPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}