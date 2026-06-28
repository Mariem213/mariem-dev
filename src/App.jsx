import Container from "./components/ui/Container/Container";

function App() {
  return (
    <main className="min-h-screen">
      <Container>
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