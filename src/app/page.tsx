import { Mail } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950">
      <div className="absolute inset-0">
        <Image
          src="/images/denver.webp"
          alt="Image of Denver, CO"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover [object-position:35%_75%] md:[object-position:top]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl px-6 py-16 md:px-8 md:py-32">
        <Card className="w-full max-w-xl bg-white/10 text-white backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <CardContent className="p-6">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Brennan Fife
            </h1>
            <div className="mt-10 flex items-center gap-3">
              <Button variant="secondary" asChild>
                <a href="mailto:brenfife@gmail.com">
                  <Mail />
                  Email me
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

