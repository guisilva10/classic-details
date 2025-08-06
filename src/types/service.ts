export interface ServiceItem {
  text: string;
  included: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  category: string;
  icon: React.ReactNode;
  image: string;
  items: ServiceItem[];
  whatsappMessage: string;
}
