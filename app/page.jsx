export default function Home() {
  return (
    <main className="flex flex-col justify-center px-10 md:px-60 min-h-screen">
      <section id="about" className="h-screen flex flex-col justify-center">
        <h1>About</h1>
      </section>
      <section id="projects" className="h-screen flex flex-col justify-center">
        <h1>Projects</h1>
      </section>
      <section id="contact" className="h-screen flex flex-col justify-center">
        <h1>Contact</h1>
      </section>
    </main>
  );
}
