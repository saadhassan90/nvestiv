import { Search, Image, Map, Paperclip, Mic } from "lucide-react";
import { useState } from "react";

interface SearchBoxProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function PerplexitySearchBox({ 
  onSearch, 
  placeholder = "Ask anything..." 
}: SearchBoxProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="search-box-perplexity">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="input-perplexity pr-24"
        />
        
        {/* Action Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <button
            type="button"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            title="Add image"
          >
            <Image className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            title="Voice input"
          >
            <Mic className="w-4 h-4" />
          </button>
          
          <button
            type="submit"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}