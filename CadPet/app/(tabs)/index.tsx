// Exemplo com axios

import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/teste');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data ? data : 'Carregando...'}</Text>
      <Button title="Recarregar" onPress={fetchData} />
    </View>
  );
};

export default App;
