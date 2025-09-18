import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative z-10 dark:bg-gray-900">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto px-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
