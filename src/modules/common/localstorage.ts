import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: any, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error('Failed to save the data to the storage', e);
    }
};

export const getStorageData = async (key: any) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.error('Failed to fetch the data from storage', e);
    }
};
