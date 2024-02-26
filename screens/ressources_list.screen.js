import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import RessourceCard from '../components/RessourceCard';
import { colors } from '../config/color';

export default function RessourcesList(props) {
  const [ressources, setRessources] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.17:8000/api/ressources')
      .then((response) => response.json())
      .then((data) => {
        setRessources(data.ressources.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centeredContent}>
        {ressources.map((resource) => (
          <RessourceCard
            key={resource.id}
            title={resource.titre_res}
            description={resource.contenu_res}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
