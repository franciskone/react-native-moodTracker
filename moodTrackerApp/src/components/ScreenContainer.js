import React from 'react'
import {StyleSheet, SafeAreaView, View} from 'react-native'
import PropTypes from 'prop-types'

// TODO Franciskone: DELETE if not needed

export default ScreenContainer = ({children, safeAreaTop, safeAreaBottom}) => {
	
	return (
		<View>
			{safeAreaTop && <SafeAreaView /> }
			{children}
			{safeAreaBottom && <SafeAreaView /> }
		</View>
	)
}

ScreenContainer.propTypes = {
	safeAreaTop: PropTypes.bool,
	safeAreaBottom: PropTypes.bool,
}
ScreenContainer.defaultProps = {
	safeAreaTop: false,
	safeAreaBottom: false,
}

const styles = StyleSheet.create({
	flex: 1,
	width: '100%',
	justifyContent: 'center',
	alignItems: 'center'
})

