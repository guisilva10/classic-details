import { services } from "@/constants/services";
import { ServiceCard } from "./_components/service-card";
import Footer from "./_components/footer";
import ContactInfoSection from "./_components/contact-info-section";
import Header from "./_components/header";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Nossos Serviços</h2>
          <p className="text-muted-foreground text-sm">
            Escolha o serviço ideal para seu veículo e entre em contato conosco
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Contact Info */}
        <ContactInfoSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
