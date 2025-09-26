import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Search, Grid3X3, List, Star, Info, MoreHorizontal, FolderIcon, FileIcon, Share, Download, Eye, Zap, Link as LinkIcon, Users, Clock } from 'lucide-react';

interface AIInsight {
  id: string;
  type: 'linked' | 'processing' | 'connection' | 'insight';
  message: string;
  position: { x: number; y: number };
}

const fileItems = [
  { id: 1, name: 'Investment Committee', type: 'folder', icon: '📊', size: '47 items', modified: '2 days ago', insights: ['linked-jordan', 'processing'] },
  { id: 2, name: 'Due Diligence', type: 'folder', icon: '🔍', size: '23 items', modified: '1 day ago', insights: ['insight-blackstone'] },
  { id: 3, name: 'Legal Documents', type: 'folder', icon: '⚖️', size: '156 items', modified: '3 hours ago', insights: ['connection-trust'] },
  { id: 4, name: 'Estate Planning', type: 'folder', icon: '🏛️', size: '89 items', modified: '5 hours ago', insights: [] },
  { id: 5, name: 'Philanthropy', type: 'folder', icon: '💝', size: '34 items', modified: '1 week ago', insights: ['linked-foundation'] },
  { id: 6, name: 'Blackstone_Memo_Q3.pdf', type: 'file', icon: '📄', size: '2.4 MB', modified: '2 hours ago', insights: ['processing', 'linked-noah'] },
  { id: 7, name: 'Trust_Amendment_2024.docx', type: 'file', icon: '📝', size: '1.2 MB', modified: '1 day ago', insights: ['connection-legal'] },
  { id: 8, name: 'Portfolio_Review.xlsx', type: 'file', icon: '📊', size: '3.8 MB', modified: '3 days ago', insights: ['insight-performance'] },
  { id: 9, name: 'Foundation_Report_2024.pdf', type: 'file', icon: '📄', size: '5.1 MB', modified: '1 week ago', insights: [] },
  { id: 10, name: 'Investment_Strategy.pptx', type: 'file', icon: '📈', size: '8.9 MB', modified: '4 days ago', insights: ['processing'] },
  { id: 11, name: 'Tax_Planning_2024.xlsx', type: 'file', icon: '📊', size: '2.7 MB', modified: '1 day ago', insights: ['linked-advisor'] },
  { id: 12, name: 'Market_Analysis_Q4.pdf', type: 'file', icon: '📄', size: '4.3 MB', modified: '6 hours ago', insights: ['insight-market', 'processing'] }
];

const insightMessages = {
  'linked-jordan': 'Linked to Jordan Noah',
  'linked-noah': 'Associated with Noah Williams',
  'linked-foundation': 'Connected to Foundation Board',
  'linked-advisor': 'Shared with Tax Advisor',
  'processing': 'IRIS analyzing...',
  'connection-trust': 'Related to Trust Documents',
  'connection-legal': 'Cross-referenced with Legal',
  'insight-blackstone': 'Blackstone follow-up pending',
  'insight-performance': 'Performance above benchmark',
  'insight-market': 'Market timing opportunity'
};

export const GoogleDriveInterface = ({ className }: { className?: string }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeInsights, setActiveInsights] = useState<AIInsight[]>([]);

  useEffect(() => {
    // Generate floating insights
    const insights: AIInsight[] = [];
    fileItems.forEach((item, index) => {
      item.insights.forEach((insightKey, insightIndex) => {
        insights.push({
          id: `${item.id}-${insightIndex}`,
          type: insightKey.split('-')[0] as any,
          message: insightMessages[insightKey as keyof typeof insightMessages],
          position: { 
            x: (index % 4) * 25 + 10 + insightIndex * 5, 
            y: Math.floor(index / 4) * 20 + 15 + insightIndex * 3 
          }
        });
      });
    });
    setActiveInsights(insights);
  }, []);

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'linked': return 'bg-blue-500/20 text-blue-600 border-blue-300/30';
      case 'processing': return 'bg-purple-500/20 text-purple-600 border-purple-300/30';
      case 'connection': return 'bg-green-500/20 text-green-600 border-green-300/30';
      case 'insight': return 'bg-orange-500/20 text-orange-600 border-orange-300/30';
      default: return 'bg-gray-500/20 text-gray-600 border-gray-300/30';
    }
  };

  return (
    <div className={cn("relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700", className)} 
         style={{ aspectRatio: '1/1.75', height: '700px' }}>
      
      {/* Google Drive Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* Google Drive Logo */}
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm opacity-90"></div>
            </div>
            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Drive</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
            <Info className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
            <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 gap-2">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input 
            type="text" 
            placeholder="Search in Drive" 
            className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>My Drive</span>
          <span>/</span>
          <span>Family Office</span>
        </div>
        
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setViewMode('grid')}
            className={cn("p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800", 
              viewMode === 'grid' && "bg-blue-100 dark:bg-blue-900/30 text-blue-600")}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={cn("p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800",
              viewMode === 'list' && "bg-blue-100 dark:bg-blue-900/30 text-blue-600")}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* File Grid/List */}
      <div className="flex-1 p-4 overflow-y-auto relative">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-4 gap-3">
            {fileItems.map((item) => (
              <div key={item.id} className="relative group">
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs text-center text-gray-700 dark:text-gray-300 font-medium line-clamp-2 h-8">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.size}
                  </div>
                </div>
                
                {/* AI Intelligence Overlay for this item */}
                {item.insights.includes('processing') && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                )}
                
                {item.insights.some(i => i.startsWith('linked')) && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-1.5 h-1.5 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {fileItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer group">
                <div className="text-lg">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{item.name}</div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{item.modified}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 w-16 text-right">{item.size}</div>
                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                  <MoreHorizontal className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Floating AI Insights Overlay */}
        {activeInsights.map((insight) => (
          <div
            key={insight.id}
            className={cn(
              "absolute z-10 px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm",
              "animate-pulse transition-all duration-1000",
              getInsightColor(insight.type)
            )}
            style={{
              left: `${insight.position.x}%`,
              top: `${insight.position.y}%`,
            }}
          >
            <div className="flex items-center gap-1">
              {insight.type === 'processing' && <Zap className="w-3 h-3" />}
              {insight.type === 'linked' && <LinkIcon className="w-3 h-3" />}
              {insight.type === 'connection' && <Users className="w-3 h-3" />}
              {insight.type === 'insight' && <Eye className="w-3 h-3" />}
              <span>{insight.message}</span>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" style={{ zIndex: 1 }}>
          {/* Example connection lines between related files */}
          <line
            x1="20%"
            y1="25%"
            x2="45%"
            y2="35%"
            stroke="rgb(59 130 246 / 0.3)"
            strokeWidth="1"
            strokeDasharray="3,3"
            className="animate-pulse"
          />
          <line
            x1="70%"
            y1="45%"
            x2="25%"
            y2="65%"
            stroke="rgb(168 85 247 / 0.3)"
            strokeWidth="1"
            strokeDasharray="3,3"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{fileItems.length} items</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              IRIS Connected
            </span>
            <span>2.4 GB of 15 GB used</span>
          </div>
        </div>
      </div>
    </div>
  );
};