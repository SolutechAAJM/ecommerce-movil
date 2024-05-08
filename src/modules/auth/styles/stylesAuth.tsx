import { ViewStyle, TextStyle } from 'react-native';
import stylesG from '../../../../stylesG';
export interface AuthStyles {
  vwDecoration:ViewStyle;
  vwInputLoginSignUp: ViewStyle;
  vwIconsLoginSignUp: ViewStyle;
  txtInputLoginSignUp: TextStyle;
  vwBtnLoginSignUp: ViewStyle;
  oTLoginSignUp: ViewStyle;
}
const stylesAuth: AuthStyles = {
    vwDecoration:{
        width:'80%',
        height:'80%',
        backgroundColor:stylesG.primaryColor,
        borderTopLeftRadius:50,
        borderBottomRightRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
      },
    vwInputLoginSignUp: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
    vwIconsLoginSignUp:{
        width:'20%',
        height:40,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    txtInputLoginSignUp:{
        width:'80%',
        height:40,
        backgroundColor:'white',
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
    },
    vwBtnLoginSignUp:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        gap:15,
    },
    oTLoginSignUp:{
        width:'30%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:50,
    },
}
export default stylesAuth;