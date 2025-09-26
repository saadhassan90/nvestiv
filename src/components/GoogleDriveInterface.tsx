import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search, Grid3X3, List, Star, Info, MoreHorizontal, FolderIcon, FileIcon, Share, Download, Eye, Zap, Link as LinkIcon, Users, Clock, CheckSquare } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import googleDriveLogo from '@/assets/google-drive-logo.png';

const people = {
  jordan: { name: 'Jordan Noah', company: 'Family Office', avatar: '/src/assets/jordan-noah-avatar.jpg', initials: 'JN' },
  alex: { name: 'Alex Rivera', company: 'Investment Advisory', avatar: '', initials: 'AR' },
  misha: { name: 'Misha Fuentes', company: 'Legal Counsel', avatar: '/src/assets/misha-fuentes-avatar.jpg', initials: 'MF' },
  sarah: { name: 'Sarah Chen', company: 'Tax Advisory', avatar: '', initials: 'SC' },
  david: { name: 'David Miller', company: 'Blackstone', avatar: '', initials: 'DM' },
  emily: { name: 'Emily Johnson', company: 'Foundation Board', avatar: '', initials: 'EJ' },
  marcus: { name: 'Marcus Thompson', company: 'Wealth Management', avatar: '', initials: 'MT' },
  lisa: { name: 'Lisa Park', company: 'Private Equity', avatar: '', initials: 'LP' },
  robert: { name: 'Robert Kim', company: 'Compliance', avatar: '', initials: 'RK' },
  nina: { name: 'Nina Rodriguez', company: 'Operations', avatar: '', initials: 'NR' }
};

const fileItems = [
  { 
    id: 1, 
    name: 'Investment Committee', 
    type: 'folder', 
    size: '47 items', 
    modified: '2 days ago', 
    people: ['jordan', 'alex', 'david'],
    tasks: ['Review Q4 portfolio allocation', 'Schedule next committee meeting', 'Update investment guidelines']
  },
  { 
    id: 2, 
    name: 'Due Diligence', 
    type: 'folder', 
    size: '23 items', 
    modified: '1 day ago', 
    people: ['david', 'marcus'],
    tasks: ['Complete Blackstone analysis', 'Request additional financials', 'Schedule management presentation']
  },
  { 
    id: 3, 
    name: 'Legal Documents', 
    type: 'folder', 
    size: '156 items', 
    modified: '3 hours ago', 
    people: ['misha', 'lisa'],
    tasks: ['Review trust amendments', 'Update beneficiary information', 'File annual compliance reports']
  },
  { 
    id: 4, 
    name: 'Estate Planning', 
    type: 'folder', 
    size: '89 items', 
    modified: '5 hours ago', 
    people: ['robert', 'sarah', 'jordan'],
    tasks: ['Update will provisions', 'Review tax implications', 'Schedule family meeting']
  },
  { 
    id: 5, 
    name: 'Philanthropy', 
    type: 'folder', 
    size: '34 items', 
    modified: '1 week ago', 
    people: ['emily', 'nina'],
    tasks: ['Approve grant allocations', 'Review foundation strategy', 'Prepare annual report']
  },
  { 
    id: 6, 
    name: 'Blackstone_Memo_Q3.pdf', 
    type: 'file', 
    size: '2.4 MB', 
    modified: '2 hours ago', 
    people: ['alex', 'david'],
    tasks: ['Analyze performance metrics', 'Compare to benchmarks', 'Prepare summary for committee']
  },
  { 
    id: 7, 
    name: 'Trust_Amendment_2024.docx', 
    type: 'file', 
    size: '1.2 MB', 
    modified: '1 day ago', 
    people: ['misha'],
    tasks: ['Legal review required', 'Get trustee signatures', 'File with court']
  },
  { 
    id: 8, 
    name: 'Portfolio_Review.xlsx', 
    type: 'file', 
    size: '3.8 MB', 
    modified: '3 days ago', 
    people: ['marcus', 'jordan'],
    tasks: ['Update asset allocation', 'Calculate returns', 'Prepare presentation']
  }
];

export const GoogleDriveInterface = ({ className }: { className?: string }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <TooltipProvider>
      <div className={cn("relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700", className)} 
           style={{ aspectRatio: '1/1.75', height: '700px' }}>
        
        {/* Google Drive Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Google Drive Logo */}
              <img 
                src={googleDriveLogo} 
                alt="Google Drive" 
                className="w-6 h-6"
              />
              <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Google Drive Integration</span>
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
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {fileItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/30">
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
                
                {/* Connected People Avatars */}
                <div className="flex -space-x-2">
                  {item.people.slice(0, 3).map((personKey, index) => {
                    const person = people[personKey as keyof typeof people];
                    return (
                      <Tooltip key={personKey}>
                        <TooltipTrigger asChild>
                          <Avatar className="w-6 h-6 border-2 border-white dark:border-gray-900 hover:z-10 relative">
                            <AvatarImage src={person.avatar} alt={person.name} />
                            <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                              {person.initials}
                            </AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p className="font-medium">{person.name}</p>
                          <p className="text-xs text-gray-400">{person.company}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                  {item.people.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-xs text-gray-600 dark:text-gray-300">+{item.people.length - 3}</span>
                    </div>
                  )}
                </div>

                {/* Tasks Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <CheckSquare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-xs">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">Pending Tasks</p>
                      {item.tasks.map((task, index) => (
                        <p key={index} className="text-xs text-gray-300">• {task}</p>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>

                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                  <MoreHorizontal className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                </button>
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
    </TooltipProvider>
  );
};