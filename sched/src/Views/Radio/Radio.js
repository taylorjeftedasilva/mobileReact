import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import estilo from "./estilos";
const Radio = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={estilo.radioView}>
        <View >
            <RadioButton value="Pendente" />
            <Text>Pend</Text>
        </View>
        <View>
            <RadioButton value="Concluído" />
            <Text>Conc</Text>
        </View>
      </View>
    </RadioButton.Group>
  );
};

export default Radio;


