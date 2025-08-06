"use client";

import { Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Service } from "@/types/service";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

const categoryColors = {
  Lavagem: "bg-blue-100 text-blue-800",
  Proteção: "bg-green-100 text-green-800",
  Detalhamento: "bg-purple-100 text-purple-800",
  Combo: "bg-orange-100 text-orange-800",
  Premium: "bg-red-100 text-red-800",
  Especializado: "bg-yellow-100 text-yellow-800",
};

export function ServiceCard({ service }: { service: Service }) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real da Classic Details
    const encodedMessage = encodeURIComponent(service.whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="overflow-hidden">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>

      <CardHeader className="pb-3">
        <div className="mb-2 flex items-center justify-between">
          <Badge
            className={
              categoryColors[service.category as keyof typeof categoryColors]
            }
          >
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{service.name}</CardTitle>
        <CardDescription className="text-sm">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        {/* Service Items */}
        <div className="mb-4 space-y-2">
          {service.items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-muted-foreground text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-4 text-center">
          <p className="mb-1 text-xs text-gray-500">Valor:</p>
          <p className="text-lg font-bold text-green-600">
            {service.priceRange}
          </p>
          <p className="text-xs text-gray-500">
            (dependendo do tamanho e estado do veículo)
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 text-white hover:bg-green-700"
        >
          <FaWhatsapp className="mr-2 h-4 w-4" />
          Consultar serviço
        </Button>
      </CardFooter>
    </Card>
  );
}
