import React, {Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import estilo from "./estilo";

const Login = () => {
  return (
    <View  style={estilo.loginView}>
      <View style={estilo.textoView}>
        <Text style={estilo.texto}>
          SCHED
        </Text>
      </View>
      <View style={estilo.inputView}>
        <TextInput style={estilo.input} placeholder="User"/>
        <TextInput secureTextEntry={true} style={estilo.input} placeholder="Password"/>
      </View>
      <View style={estilo.botao}>
        <TouchableOpacity>
            <Text style={estilo.botaoTexto} >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Login;
