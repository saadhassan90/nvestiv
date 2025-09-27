import React from 'react';
import { Search, Folder, TrendingUp, Radar, FileText, Clock } from 'lucide-react';

interface AgentFeedItem {
  id: string;
  agentName: string;
  icon: React.ReactNode;
  action: string;
  timestamp: string;
  status: 'active' | 'in-progress' | 'flagged';
}

const LiveAgentFeed = () => {
  const feedItems: AgentFeedItem[] = [
    {
      id: '1',
      agentName: 'Deal Screener',
      icon: <Search className="h-4 w-4" />,
      action: 'Flagged 3 out of 12 new deals for review',
      timestamp: '2m ago',
      status: 'active'
    },
    {
      id: '2',
      agentName: 'Due Diligence',
      icon: <Folder className="h-4 w-4" />,
      action: 'Highlighted missing financial model in HealthTech DataRoom',
      timestamp: '5m ago',
      status: 'flagged'
    },
    {
      id: '3',
      agentName: 'Portfolio Monitor',
      icon: <TrendingUp className="h-4 w-4" />,
      action: 'Alert: Revenue growth slowing in Fund II holding',
      timestamp: '12m ago',
      status: 'active'
    },
    {
      id: '4',
      agentName: 'Market Intel',
      icon: <Radar className="h-4 w-4" />,
      action: 'Detected 3 new SaaS competitors in roll-up market',
      timestamp: '18m ago',
      status: 'in-progress'
    },
    {
      id: '5',
      agentName: 'LP Report Generator',
      icon: <FileText className="h-4 w-4" />,
      action: 'Drafted Q3 performance summary for Family Office LPs',
      timestamp: '22m ago',
      status: 'active'
    }
  ];

  const getStatusDot = (status: string) => {
    const baseClasses = "w-2 h-2 rounded-full flex-shrink-0";
    switch (status) {
      case 'active':
        return <div className={`${baseClasses} bg-green-500`} />;
      case 'in-progress':
        return <div className={`${baseClasses} bg-yellow-500`} />;
      case 'flagged':
        return <div className={`${baseClasses} bg-red-500`} />;
      default:
        return <div className={`${baseClasses} bg-muted`} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'in-progress':
        return 'In Progress';
      case 'flagged':
        return 'Flagged';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-card-foreground">Live Agent Feed</h4>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {feedItems.map((item, index) => (
          <div key={item.id} className="relative">
            <div className="bg-muted/30 rounded-lg p-4 border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-card-foreground text-sm">
                      {item.agentName}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    {getStatusDot(item.status)}
                    <span className="text-xs text-muted-foreground">
                      {getStatusText(item.status)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {item.action}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle divider line - not shown after last item */}
            {index < feedItems.length - 1 && (
              <div className="absolute left-7 top-full w-px h-4 bg-border/50" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-2">
            5 agents working continuously
          </p>
          <button className="text-xs text-primary hover:text-primary/80 transition-colors">
            View All Activity →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveAgentFeed;