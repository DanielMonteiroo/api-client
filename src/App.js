import { useState } from 'react';
import './App.css';
import TalkWithAI from './pages/chat/TalkWithAI';
import RecipeGenerator from './pages/recipe/RecipeGenerator';
import ImageGenerator from './pages/image/ImageGenerator';

function App() {

  const [activeTab,setActiveTab] = useState('ask-ai')

  const handleTabChange = (tab) =>{
      // alert(tab);
      setActiveTab(tab);
  }

  return (
    <div className="App">
      <button 
      className={activeTab === 'ask-ai' ? 'active' : ''}
      onClick={() => handleTabChange('ask-ai')}>Conversar com a IA</button>
      <button 
      className={activeTab === 'recipe-creator' ? 'active' : ''}
      onClick={() => handleTabChange('recipe-creator')}>Gerador de receitas</button>
      <button 
      className={activeTab === 'generate-image' ? 'active' : ''}
      onClick={() => handleTabChange('generate-image')}>Gerador de imagens</button>

      <div>
        {activeTab === 'ask-ai' && <TalkWithAI/>}
        {activeTab === 'recipe-creator' && <RecipeGenerator/>}
        {activeTab === 'generate-image' && <ImageGenerator/>}
      </div>
    </div>
    
  );
}

export default App;
