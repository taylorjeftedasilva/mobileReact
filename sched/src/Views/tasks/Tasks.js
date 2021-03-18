import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import estilo from "./estilos";
import {Radio} from "../Radio"


const Tasks = () =>{
    return(
        <Fragment>
            <View style={estilo.container}>  
                <ScrollView  style={estilo.tasks}>
                    <View style={estilo.tarefas}>
                        <Text style={estilo.descricao}>Lavar A Louça </Text>
                        <View style={estilo.statusView}>
                            <Text style={estilo.status} >status: </Text>
                            <Text style={estilo.statusResulte} > Pendente </Text>
                            <View style={estilo.radioView}>
                            <Radio />
                            </View>
                        </View>
                    </View>
                </ScrollView> 
                <View style={estilo.imagemView}>
                    <TouchableOpacity >
                        <Image  style={estilo.imagem} source={require("../../../res/img/add.png")}/>
                    </TouchableOpacity>
                </View>    
            </View>
            
        </Fragment>
    );
}
export default Tasks; 