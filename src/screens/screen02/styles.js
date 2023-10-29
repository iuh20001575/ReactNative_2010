import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        backgroundColor: 'rgba(27, 169, 255, 1)',
    },
    list: {
        paddingVertical: 22,
        paddingHorizontal: 12,
        gap: 11,
        backgroundColor: '#e5e5e5',
    },
    item: {
        flex: 1,
    },
    info: {
        paddingTop: 9,
        paddingHorizontal: 15,
    },
    image: {
        width: 155,
        height: 90,
    },
    title: {
        fontSize: 12,
        lineHeight: 14,
    },
    review: {
        flexDirection: 'row',
        gap: 3,
        marginTop: 2,
    },
    rating: {
        flexDirection: 'row',
        gap: 5,
    },
    start: {
        width: 13,
        aspectRatio: 1 / 1,
    },
    priceGroup: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 4,
    },
    price: {
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14,
    },
    sale: {
        fontSize: 12,
        lineHeight: 14,
        color: 'rgba(150, 157, 170, 1)',
    },
    search: {
        gap: 10,
        flexDirection: 'row',
        marginLeft: 9,
        marginRight: 32,
        backgroundColor: '#fff',
        paddingHorizontal: 9,
        flex: 1,
        alignItems: 'center',
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    input: {
        height: 30,
        flex: 1,
        color: 'rgba(125, 91, 91, 1)',
        fontSize: 14,
        lineHeight: 16,
    },
});

export default styles;
