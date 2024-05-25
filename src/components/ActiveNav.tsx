import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Bars } from '../../Icons'

interface ActiveNavProps {
    setIsActive: (isActive: boolean) => void;
  }
const ActiveNav: React.FC<ActiveNavProps> = ({ setIsActive }) => {
    return (
        <TouchableOpacity onPress={() => {
            setIsActive(true)
          }}>
            <Bars size={30} color="black" />
          </TouchableOpacity>
    );
  };

export default ActiveNav;