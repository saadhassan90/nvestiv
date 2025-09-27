import { Mail, Calendar, FileText, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const DataFoundationsFlow = () => {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">Emails, Calendars, and Notes That Work for You</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your communication history tells the story of your business. Nvestiv captures and organizes it all.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col items-center space-y-8">
              {/* Input Sources */}
              <div className="flex space-x-12">
                {[
                  { icon: Mail, label: "Email", index: 0 },
                  { icon: Calendar, label: "Calendar", index: 1 },
                  { icon: FileText, label: "Notes", index: 2 }
                ].map(({ icon: Icon, label, index }) => (
                  <div key={label} className="text-center">
                    <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center mb-3 transition-all duration-500 ${
                      pulseIndex === index 
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/25' 
                        : 'border-muted bg-background'
                    }`}>
                      <Icon className={`w-8 h-8 ${pulseIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              {/* Animated Pulse Lines */}
              <div className="relative w-full h-20">
                {[0, 1, 2].map((index) => (
                  <svg
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 300 80"
                  >
                    <path
                      d={`M ${50 + index * 100} 0 Q 150 40 150 80`}
                      stroke={pulseIndex === index ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                      strokeWidth="2"
                      fill="none"
                      className="transition-all duration-500"
                      opacity={pulseIndex === index ? "1" : "0.3"}
                    >
                      {pulseIndex === index && (
                        <animate
                          attributeName="stroke-dasharray"
                          values="0,1000;100,1000;100,1000"
                          dur="1.5s"
                          repeatCount="1"
                        />
                      )}
                    </path>
                  </svg>
                ))}
              </div>

              {/* Central Database */}
              <div className="relative">
                <div className="w-20 h-20 rounded-xl border-2 border-primary bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/25">
                  <Database className="w-10 h-10 text-primary" />
                  <div className={`absolute inset-0 rounded-xl border-2 border-primary animate-ping ${
                    pulseIndex >= 0 ? 'opacity-75' : 'opacity-0'
                  }`} />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">CRM Database</p>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </h3>
              <p className="text-muted-foreground">
                Retroactively ingests history, creates contacts, summarizes relationships, 
                and updates continuously from ongoing dialogue.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                Calendar
              </h3>
              <p className="text-muted-foreground">
                Every event logged and linked to the right record.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                Meeting Notes
              </h3>
              <p className="text-muted-foreground">
                Notetaker transcripts vectorized and attached.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <Database className="w-5 h-5 text-primary" />
                Smart Ops
              </h3>
              <p className="text-muted-foreground">
                AI auto-generates lists, tasks, and reminders from your goals.
              </p>
            </div>

            {/* Status Panel */}
            <Card className="mt-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    12 new contacts created from past emails
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFoundationsFlow;