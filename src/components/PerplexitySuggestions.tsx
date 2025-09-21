import { Wrench, BookOpen, Heart, GraduationCap, CheckSquare } from "lucide-react";

interface Suggestion {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

const suggestions: Suggestion[] = [
  { icon: Wrench, label: "AI CRM Demo" },
  { icon: BookOpen, label: "Investment Agents" },
  { icon: Heart, label: "Portfolio Analytics" },
  { icon: GraduationCap, label: "Due Diligence" },
  { icon: CheckSquare, label: "Deal Flow" },
];

export function PerplexitySuggestions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      {suggestions.map((suggestion) => {
        const Icon = suggestion.icon;
        return (
          <button
            key={suggestion.label}
            className="pill-suggestion"
            onClick={suggestion.onClick}
          >
            <Icon className="w-4 h-4" />
            {suggestion.label}
          </button>
        );
      })}
    </div>
  );
}