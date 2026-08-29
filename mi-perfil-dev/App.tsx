import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState<number>(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar o Foto */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/1e/35/71/1e35711ac298f19836b8c08ad80b42d8.jpg' }}
        style={styles.avatar}
      />

      {/* Nombre, Rol y Biografía */}
      <Text style={styles.name}>Edgar Zuñiga</Text>
      <Text style={styles.role}>Estudiante de Ingeniería / Developer</Text>
      <Text style={styles.bio}>
        Apasionado por la tecnología, el desarrollo de software y la ciberseguridad.
      </Text>

      {/* Habilidades / Tecnologías favoritas */}
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>Tecnologías Favoritas:</Text>
        <Text style={styles.skillBadge}>💻 Python</Text>
        <Text style={styles.skillBadge}>⚡ C/C++, Java</Text>
        <Text style={styles.skillBadge}>🛠️ Git & GitHub</Text>
        <Text style={styles.skillBadge}> 💻 Windows, Linux </Text>
        <Text style={styles.skillBadge}> 🖲 Redes, Virtualización, Ciberseguridad </Text>
      </View>

      {/* Contador de Likes interactivo */}
      <View style={styles.likeContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.7 : 1 }
          ]}
          onPress={() => setLikes(likes + 1)}
        >
          <Text style={styles.buttonText}>❤️ Dar Like</Text>
        </Pressable>
        <Text style={styles.likeCount}>Reacciones: {likes}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#4A90E2',
    marginBottom: 15,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  skillsContainer: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
  skillsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  skillBadge: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  likeContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8aa2b9ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  likeCount: {
    marginTop: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
});