import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSearch, Link, MessageSquare, FolderOpen } from "lucide-react";
import googleDrive from "@/assets/logos/google-drive-new.png";
import dropbox from "@/assets/logos/dropbox-new.png";
import onedrive from "@/assets/logos/onedrive-new.png";
import sharepoint from "@/assets/logos/sharepoint-new.png";
import box from "@/assets/logos/box-new.png";

const FilesIntegrationSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary from-0% via-primary via-70% to-primary/10 to-100% p-[1px]">
              <div className="h-full w-full rounded-full bg-muted"></div>
            </div>
            <div className="relative z-10 flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              <span className="text-sm font-medium">File Intelligence</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="h2 mb-6">Files That Actually Work For You</h2>
        </div>
        
        <Card className="border border-border shadow-lg bg-card">
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column - Text Content */}
              <div className="space-y-6 flex flex-col justify-between border border-border rounded-xl p-6 h-full">
                <div>
                  <h3 className="h3 mb-4 text-card-heading">AI-Powered Document Intelligence</h3>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Connect your cloud drives and IRIS automatically indexes, vectorizes, and links 
                    every document to relevant contacts and deals. No more lost files or manual organization.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <FileSearch className="w-5 h-5 text-blue-500" />
                      <span className="text-sm"><strong>Smart Document Indexing</strong> - Every file automatically processed and linked</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link className="w-5 h-5 text-green-500" />
                      <span className="text-sm"><strong>Contextual Linking</strong> - Pitch decks, term sheets auto-connect to deals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-foreground" />
                      <span className="text-sm"><strong>Instant Q&A</strong> - Ask questions about any document set</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Integration Visual */}
              <div className="lg:pl-8">
                <div className="relative rounded-2xl">
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-[18px] blur-md opacity-15"></div>
                  <div className="relative z-10 bg-card rounded-2xl p-6 shadow-none">
                    {/* Cloud Storage Icons */}
                    <div className="flex justify-center items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 transition-transform">
                        <img
                          src={googleDrive}
                          alt="Google Drive"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 transition-transform">
                        <img
                          src={onedrive}
                          alt="OneDrive"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 transition-transform">
                        <img
                          src={dropbox}
                          alt="Dropbox"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 transition-transform">
                        <img
                          src={sharepoint}
                          alt="SharePoint"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 transition-transform">
                        <img
                          src={box}
                          alt="Box"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>

                    {/* Connection Arrow */}
                    <div className="flex justify-center mb-6">
                      <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                    </div>

                    {/* IRIS Processing */}
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center mb-6">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-primary-foreground font-bold text-sm">IRIS</span>
                      </div>
                      <p className="text-sm text-muted-foreground">AI Processing Engine</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold text-green-700 dark:text-green-400">1,247</div>
                        <div className="text-xs text-muted-foreground">Docs Processed</div>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold text-blue-700 dark:text-blue-400">89%</div>
                        <div className="text-xs text-muted-foreground">Auto-Linked</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FilesIntegrationSection;