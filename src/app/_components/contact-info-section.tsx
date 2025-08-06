const ContactInfoSection = () => {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="mb-3 text-center font-semibold">📞 Entre em Contato</h3>
      <div className="text-muted-foreground space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>Rua das Zineas, 316 - Portais(Polvilho)</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🕒</span>
          <span>Segunda a Sábado, 09h às 17h</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📱</span>
          <span>WhatsApp: (11) 94032-6759</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
