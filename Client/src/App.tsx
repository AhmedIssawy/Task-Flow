import React from 'react';
import { Providers } from './lib/providers';

function App() {
  return (
    <Providers>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">--</h1>
          {/* Your new content will go here */}
        </div>
      </div>
    </Providers>
  );
}

export default App;
