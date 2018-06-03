import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
      LayoutAnimation.spring();
  }
  rowClicked = () => {
    const { id } = this.props.library;
    this.props.selectLibrary(id);
  };

  renderDescription = () => {
    if (this.props.library.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.rowClicked}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
