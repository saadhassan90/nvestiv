import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search, Grid3X3, List, Star, Info, MoreHorizontal, FolderIcon, FileIcon, Share, Download, Eye, Zap, Link as LinkIcon, Users, Clock } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const fileItems = [
  { id: 1, name: 'Investment Committee', type: 'folder', size: '47 items', modified: '2 days ago', insights: ['linked-jordan', 'processing'] },
  { id: 2, name: 'Due Diligence', type: 'folder', size: '23 items', modified: '1 day ago', insights: ['insight-blackstone'] },
  { id: 3, name: 'Legal Documents', type: 'folder', size: '156 items', modified: '3 hours ago', insights: ['connection-trust'] },
  { id: 4, name: 'Estate Planning', type: 'folder', size: '89 items', modified: '5 hours ago', insights: [] },
  { id: 5, name: 'Philanthropy', type: 'folder', size: '34 items', modified: '1 week ago', insights: ['linked-foundation'] },
  { id: 6, name: 'Blackstone_Memo_Q3.pdf', type: 'file', size: '2.4 MB', modified: '2 hours ago', insights: ['processing', 'linked-noah'] },
  { id: 7, name: 'Trust_Amendment_2024.docx', type: 'file', size: '1.2 MB', modified: '1 day ago', insights: ['connection-legal'] },
  { id: 8, name: 'Portfolio_Review.xlsx', type: 'file', size: '3.8 MB', modified: '3 days ago', insights: ['insight-performance'] },
  { id: 9, name: 'Foundation_Report_2024.pdf', type: 'file', size: '5.1 MB', modified: '1 week ago', insights: [] },
  { id: 10, name: 'Investment_Strategy.pptx', type: 'file', size: '8.9 MB', modified: '4 days ago', insights: ['processing'] },
  { id: 11, name: 'Tax_Planning_2024.xlsx', type: 'file', size: '2.7 MB', modified: '1 day ago', insights: ['linked-advisor'] },
  { id: 12, name: 'Market_Analysis_Q4.pdf', type: 'file', size: '4.3 MB', modified: '6 hours ago', insights: ['insight-market', 'processing'] }
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'linked': return 'bg-blue-500/20 text-blue-600 border-blue-300/30 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-400/20';
      case 'processing': return 'bg-purple-500/20 text-purple-600 border-purple-300/30 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-400/20';
      case 'connection': return 'bg-green-500/20 text-green-600 border-green-300/30 dark:bg-green-500/10 dark:text-green-400 dark:border-green-400/20';
      case 'insight': return 'bg-orange-500/20 text-orange-600 border-orange-300/30 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-400/20';
      default: return 'bg-gray-500/20 text-gray-600 border-gray-300/30 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-400/20';
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
      <ScrollArea className="flex-1 p-4 relative">
        <div className="space-y-2">
          {fileItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/30">
                <div className="flex-shrink-0">
                  {item.type === 'folder' ? 
                    <FolderIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : 
                    <FileIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{item.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.modified} • {item.size}</div>
                </div>
                
                {/* AI Intelligence Indicators */}
                <div className="flex items-center gap-1">
                  {item.insights.includes('processing') && (
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  )}
                  
                  {item.insights.some(i => i.startsWith('linked')) && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-1.5 h-1.5 text-white" />
                    </div>
                  )}
                </div>
                
                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                  <MoreHorizontal className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* AI Insight Labels */}
              {item.insights.map((insightKey, index) => (
                <div
                  key={`${item.id}-${insightKey}`}
                  className={cn(
                    "absolute z-10 px-2 py-1 rounded text-xs font-medium border backdrop-blur-sm",
                    "transition-all duration-300",
                    getInsightColor(insightKey.split('-')[0])
                  )}
                  style={{
                    right: `${20 + index * 60}px`,
                    top: `${5 + index * 2}px`,
                  }}
                >
                  <div className="flex items-center gap-1">
                    {insightKey.includes('processing') && <Zap className="w-3 h-3" />}
                    {insightKey.includes('linked') && <LinkIcon className="w-3 h-3" />}
                    {insightKey.includes('connection') && <Users className="w-3 h-3" />}
                    {insightKey.includes('insight') && <Eye className="w-3 h-3" />}
                    <span>{insightMessages[insightKey as keyof typeof insightMessages]}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>

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