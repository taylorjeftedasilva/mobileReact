import {Dimensions, StyleSheet, TouchableWithoutFeedback} from "react-native";


const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;
const estilo = new StyleSheet.create(
    {
        loginView:{
            width:largura,
            height:altura,
            backgroundColor:"#0E164D",
              
        },
        textoView:{
            height:altura*0.25,
            justifyContent:"center",
            alignItems:"center",   
        },
        texto:{
            color:"#F9EDED",
            fontSize:40,
            fontWeight:"bold"
        },
        inputView:{
            backgroundColor:"#17288E",
            width:largura*0.9,
            height:altura*0.45,
            borderTopRightRadius:40,
            alignItems:"center",
            justifyContent:"center"

        },
        input:{
            width:largura*0.7,
            backgroundColor:"white",
            margin: 10,
            borderRadius:10,
            textAlign:"center"

        },
        botao:{
            alignItems:"center",
            justifyContent:"center"
            
        },
        botaoTexto:{
            paddingTop:2,
            marginLeft:30,
            width:largura*0.4,
            height:largura*0.10,
            color:"black",
            textAlign:"center",
            backgroundColor:"white",
            borderRadius:5,
            borderColor:"black",
            fontWeight:"bold",
            fontFamily:"arial",
            marginTop:20,
            fontSize:20
        }
        
    }
)
export default estilo;