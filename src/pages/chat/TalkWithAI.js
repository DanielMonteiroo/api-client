/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

function TalkWithAI(){

    const [prompt,setPrompt] = useState('');
    const [chatResponse,setChatResponse] = useState('');
    const askAI = async()=>{}

    return(
       <div>
        <h2>Converse com a IA</h2>
        <input 
        className="askAI"
        type="text" value={prompt} 
        onChange={(e)=> 
        setPrompt(e.target.value)} 
        placeholder="Digite algo para conversar com a IA">
        </input>
        <button onClick={askAI}>Enviar</button> {/*botão de envio da mensagem*/}
        <div className="output"><p>{chatResponse}</p></div> {/*saida da resposta do chat*/}
       </div>
    );
}
export default TalkWithAI;