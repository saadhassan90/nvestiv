import { Search, Folder, BarChart3, Radar, AlertTriangle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentFeedItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  action: string;
  timestamp: string;
  status: "active" | "in-progress" | "flagged";
}

const statusConfig = {
  active: {
    dot: "bg-green-500",
    text: "Active"
  },
  "in-progress": {
    dot: "bg-yellow-500", 
    text: "In Progress"
  },
  flagged: {
    dot: "bg-red-500",
    text: "Flagged"
  }
};

const feedItems: AgentFeedItem[] = [
  {
    id: "1",
    name: "Deal Screener",
    icon: <Search className="w-4 h-4" />,
    action: "Flagged 3 out of 12 new deals for review",
    timestamp: "2m ago",
    status: "active"
  },
  {
    id: "2", 
    name: "Due Diligence",
    icon: <Folder className="w-4 h-4" />,
    action: "Highlighted missing financial model in HealthTech DataRoom",
    timestamp: "5m ago",
    status: "flagged"
  },
  {
    id: "3",
    name: "Portfolio Monitor", 
    icon: <BarChart3 className="w-4 h-4" />,
    action: "Alert: Revenue growth slowing in Fund II holding",
    timestamp: "12m ago", 
    status: "active"
  },
  {
    id: "4",
    name: "Market Intel",
    icon: <Radar className="w-4 h-4" />,
    action: "Detected 3 new SaaS competitors in roll-up market",
    timestamp: "18m ago",
    status: "in-progress"
  },
  {
    id: "5",
    name: "LP Report Generator",
    icon: <FileText className="w-4 h-4" />,
    action: "Drafted Q3 performance summary for Family Office LPs",
    timestamp: "22m ago",
    status: "active"
  }
];

interface LiveAgentFeedProps {
  className?: string;
}

export const LiveAgentFeed: React.FC<LiveAgentFeedProps> = ({ className }) => {
  return (
    <div className={cn("bg-card rounded-2xl h-[700px] flex flex-col shadow-none", className)}>
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-foreground">Live Agent Feed</h4>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Real-time updates from your AI agents</p>
      </div>

      {/* Feed Items */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-4">
          {feedItems.map((item, index) => (
            <div 
              key={item.id}
              className={cn(
                "group p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-all duration-200",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                {/* Agent Icon */}
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 transition-transform group-hover:scale-105",
                  item.status === "active" && "bg-blue-500",
                  item.status === "in-progress" && "bg-yellow-500",
                  item.status === "flagged" && "bg-red-500"
                )}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground text-sm">{item.name}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {item.action}
                  </p>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", statusConfig[item.status].dot)}></div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {statusConfig[item.status].text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            5 agents working in the background
          </span>
          <button className="text-xs text-primary hover:text-primary/80 transition-colors font-medium">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
};