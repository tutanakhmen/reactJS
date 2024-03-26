import './App.css';
import Hello from './components/Hello';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
     <Hello nama ="Hasan" major ="Informatics"/>
     <Hello nama ="Sarah" major ="Informatics"/>
     <Hello nama ="Budi" major ="Informatics"/>
     <Hello nama ="Maryam" major ="Informatics"/>
     <Hello nama ="Jonah" major ="Informatics"/>
     <Footer />

    </div>
  );
}

export default App;
