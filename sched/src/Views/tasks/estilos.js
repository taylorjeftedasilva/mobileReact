import {Dimensions, StyleSheet} from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = new StyleSheet.create({
    container:{
        width:largura,
        height:altura,
        backgroundColor:"#0E164D",
        
    },
    tasks:{
       marginTop:20,
       height:altura*0.8,
        
    },
    tarefas:{
        width:largura*0.9,
        backgroundColor:"white",
        marginBottom:10,
        marginLeft:10,
        padding:10,
    },
    descricao:{
        color:"black",
        fontWeight:"100",
        fontSize:20,
        fontFamily:"Arial"
    },
    statusView:{
        flexWrap:"wrap",
        display:"flex",
        flexDirection:"row"
    },
    status:{
        flexWrap:"wrap",
    },
    statusResulte:{
        flexWrap:"wrap",
        fontWeight:"bold"
    },
    imagemView:{
        width:largura,
        height:altura*0.2,
        marginLeft:largura-100,

    },
    imagem:{
        width:70,
        height:70,

    },
    radioView:{
        flexDirection:"row",
        flexWrap:"wrap",
        width:largura

    },
   

});
export default estilo;