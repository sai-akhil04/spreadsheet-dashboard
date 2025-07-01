
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import SpreadsheetTable from './components/SpreadsheetTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Toolbar />
      <SpreadsheetTable />
    </div>
  );
}

export default App;
