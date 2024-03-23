import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../config/color';

const StatCard = ({ number, icon }) => {
  return (
    <View style={styles.statsCard}>
      <Text style={styles.number}>{number}</Text>
      <FontAwesomeIcon icon={icon} style={styles.icon} size={70} />
    </View>
  );
};

const styles = {
  statsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    width : 175,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginLeft: 18,
    marginRight: 18,
    marginTop: 30,
    marginBottom: 5
  },
  number: {
    fontSize: 40,
    fontFamily: "Roboto-Regular",
  },
  icon: {
    color: colors.primary
  },
};

export default StatCard;
