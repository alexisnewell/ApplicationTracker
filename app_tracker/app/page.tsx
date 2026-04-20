import Image from "next/image";

export default function Home() {
  return <div className="flex min-h-screen flex-col bg white">
    <main className="flex-1">
      <section className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-black mb-6 text 6-xl font-bold ">Track Your Job Applications</h1>
        <p className="text-muted-foreground mb-10 text-xl">Organize all of your Applications in one place!</p>
        <div className="flex flex-col items-center gap-4">
          <button>Get Started!</button>
          <p>Completely Free and Easy!</p>
        </div>
        </div>
      </section>
      

    </main>

  </div>;
  
}
