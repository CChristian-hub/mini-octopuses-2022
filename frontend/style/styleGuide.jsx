import { Dimensions } from 'react-native';

const StyleGuide = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#2B2B2B',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width / 1,
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    titleProfile: {
        alignItem: 'center',
        flex: 1
    },
    profileImageButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 10,
    },
    logo: {
        width: Dimensions.get('window').width / 1.5,
        resizeMode: 'contain',
    },
    buttonTitle: {
        textAlign: "center",
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 20,
    },
    squareButtonBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#2B2B2B",
        borderRadius: 5,
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    },
    squareButtonFilled: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        colors: ['#F81C8F', '#FFA353'],
        borderRadius: 5,
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    },
    roundButtonBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#2B2B2B",
        borderRadius: 40,
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    },
    roundButtonFilled: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        colors: ['#F81C8F', '#FFA353'],
        borderRadius: 40,
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    },
    squareButtonDisable: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#757575",
        borderRadius: 5,
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    },
    titleFacebookButton: {
        color: '#fff',
        fontSize: 20,
    },
    facebookButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: Dimensions.get('window').height / 13,
        backgroundColor: '#4267B2',
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    },
    input: {
        flex: 1,
        justfyContent: "center",
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 15,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    footer: {
        width: Dimensions.get('window').width / 1,
        height: Dimensions.get('window').height / 6,
        backgroundColor: '#2B2B2B',
        position: 'absolute',
        bottom: 0,
    },
};

export default StyleGuide;
