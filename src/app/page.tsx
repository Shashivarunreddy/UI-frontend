
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-6 md:px-20">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build your component library
        </h1>
        <p className="text-muted-foreground text-lg">
          Beautifully-designed components, open source, ready for production.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 border-t pt-10">
      </section>
    </main>
  );
}
