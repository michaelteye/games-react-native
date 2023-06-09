import { StyleSheet, Text } from "react-native";

function Title({children}){
     return  <Text style ={styles.title}>{children}</Text>
      
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        // fontWeight:'bold',
        color:'#ddb52f',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12
    }
})

export default Title;