import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list: {
        paddingVertical: 22,
        paddingHorizontal: 12,
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
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 14,
    },
    sale: {
        fontSize: 12,
        lineHeight: 14,
        color: 'rgba(150, 157, 170, 1)',
    },
});

export default styles;
