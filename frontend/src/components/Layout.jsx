import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    // Root layout — theme controlled
    <div className="min-h-screen flex bg-base-100 text-base-content">
      
      {/* Sidebar */}
      {showSidebar && (
        <aside className="w-64 h-screen sticky top-0 flex-shrink-0 bg-base-200 border-r border-base-300">
          <Sidebar />
        </aside>
      )}

      {/* Right side */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <header className="sticky top-0 z-30 bg-base-200 border-b border-base-300">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-base-100">
          <div className="p-4 sm:p-6 lg:p-8 min-h-full">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default Layout;
