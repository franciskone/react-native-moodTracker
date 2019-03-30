import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';

interface IMoodLevel {
	moodLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 ;
}

const moodToColor = (moodLevel: IMoodLevel) => {
	return moodLevel
};

moodToColor();

interface IStyled {
	color: string;
}

const StyledView = styled.View`
  background-color: ${props => props.color || 'white'};
  width: 100px;
  height: 100px;
  
`;

interface IProps {
	bgColor: string
}

export default class StyledComponentTest extends Component<IProps> {
	render() {
		return (
			<StyledView color='red'>
				<Text>{this.props.color}</Text>
			</StyledView>
		);
	}
}