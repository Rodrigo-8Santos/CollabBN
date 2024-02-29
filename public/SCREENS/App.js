import logo from './logo.svg';
import './App.css';
import React from 'react';
import { View, Text, TouchableOpacity, onPressHandler, Image } from 'react-native';
import styles from '../STYLE/APP.js';


function App() {
  return (
    <div className="">
      <div className="rotina">
        <button>

        </button>
      </div>

      <div className="titulo">

      </div>

      <div className="variosbotoes">

        <div style={styles.button} className="Diario">
          <div className="botoesDiario">
            <button>Informativo diario</button>

            <button>inicio</button>
            <button>Rotina manha</button>
            <button>Rotina tarde</button>
          </div>
        </div>

        <div className="Mensal">
          <button>Informativo Mensal</button>
        </div>

      </div>
    </div>
  );
}

export default App;
