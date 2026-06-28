import Container from "./components/ui/Container/Container";
import ThemeToggle from "./components/ui/ThemeToggle/ThemeToggle";

function App() {
  return (
    <main className="min-h-screen">
      <Container className="flex flex-col items-center justify-center min-h-screen gap-8">
        <ThemeToggle />

        <h1
          className="text-5xl font-bold"
          style={{
            color: "var(--color-primary)",
          }}
        >
          Mariem Dev
        </h1>
      </Container>
    </main>
  );
}

export default App;