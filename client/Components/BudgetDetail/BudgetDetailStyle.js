import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme/theme';

const { width, height } = Dimensions.get('screen');

const style = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		height: '100%',
		paddingVertical: 30,
		backgroundColor: theme.colors.threePalet.primary,
		justifyContent: 'space-between',
	},
	container: {
		backgroundColor: '#f1f1f1',
		height: '100%',
		width: '95%',
		marginBottom: 10,
		borderRadius: 18,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	centerField: {
		alignItems: 'center',
		marginVertical: 20,
		borderWidth: 1,
		borderColor: theme.colors.threePalet.primary,
		borderRadius: 10,
		padding: 10,
		backgroundColor: theme.colors.threePalet.secondary,
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		color: theme.colors.threePalet.primary,
	},
	desc: {
		fontSize: 18,
	},
	buttonContainer: {
		width: '100%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	mainTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: theme.colors.threePalet.primary,
		width: '90%',
		textAlign: 'center',
	},
	button: {
		flexDirection: 'row',
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 15,
		backgroundColor: theme.colors.threePalet.primary,
		marginVertical: 10,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'flex-start',
	},
	text: {
		marginLeft: 10,
		marginRight: 10,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default style;
