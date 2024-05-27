import { ViewStyle, TextStyle, ColorValue } from 'react-native';
import stylesG from '../../../../stylesG';
export interface AuthStyles {
  vwDecoration:ViewStyle;
  vwForm:ViewStyle;
  vwInputLoginSignUp: ViewStyle;
  vwIconsLoginSignUp: ViewStyle;
  txtInputLoginSignUp: TextStyle;
  vwBtnLoginSignUp: ViewStyle;
  txtBtnLoginSignUp: TextStyle;
  txtClrPlaceholder: ColorValue;
  oTLoginSignUp: ViewStyle;
  vwNavLoginSignUp: ViewStyle;
  txtNavLoginSignUp: TextStyle;
  oTScreen:ViewStyle;
}
const stylesAuth: AuthStyles = {
    vwDecoration:{
        width:'90%',
        height:'90%',
        backgroundColor:stylesG.primaryColor,
        borderTopLeftRadius:50,
        borderBottomRightRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        gap:20,
      },
      vwForm:{
        width:'90%',
        height:'60%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:stylesG.secundaryColor,
        borderRadius:50,
        gap:30,
        paddingTop:20,
      },
    vwInputLoginSignUp: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    vwIconsLoginSignUp:{
        width:'20%',
        height:40,
        margin:-1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    txtInputLoginSignUp:{
        width:'70%',
        height:40,
        backgroundColor:'white',
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        color:'black',
        textShadowColor:'black',
    },
    vwBtnLoginSignUp:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        gap:15,
    },
    txtBtnLoginSignUp:{
      color:'black',
    },
    txtClrPlaceholder:'black',
    oTLoginSignUp:{
        width:'30%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:50,
    },
    vwNavLoginSignUp:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:50,
    },
    txtNavLoginSignUp:{
        color:'black',
        fontSize:22,
    },
    oTScreen:{
        borderColor:'black',
        borderBottomWidth:4
    }
}
export default stylesAuth;