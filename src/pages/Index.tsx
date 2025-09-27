import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <main className="max-w-[1200px] mx-auto mt-24 px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
