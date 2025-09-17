export interface ServiceItem {
  text: string;
  included: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
  image: string;
  items: ServiceItem[];
  whatsappMessage: string;
  timer?: string;
}
