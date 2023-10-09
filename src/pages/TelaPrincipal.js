import React from 'react';
import TelaSecundaria from './TelaSecundaria';


function TelaPrincipal() {
  return (
    <div>
    <h1>Tela Principal </h1>
        <p>Esta é a tela principal do aplicativo.</p>
        <TelaSecundaria/>
    </div>
  );
}

export default TelaPrincipal;