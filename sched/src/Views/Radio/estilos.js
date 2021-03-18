import {Dimensions, StyleSheet} from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = new StyleSheet.create({
   
    radioView:{
        width:largura,
        flexDirection:"row",
        flexWrap:"wrap",
        width:largura

    },
    radio:{
        width:largura*0.33,
        flexDirection:"row",
        flexWrap:"wrap", 
        borderStyle:null,
    }

});
export default estilo;