import React, { useState } from "react";
import { View, ImageBackground, Text, StyleSheet, Modal, TouchableHighlight, Image } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  
  const [modalVisilbe, setModalVisible] = useState<boolean>(true);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            item.id==5?
            <View key={100} style={styles.container}>
              <Modal key={100} animationType={"slide"} transparent={false} visible={modalVisilbe} onRequestClose={() => { console.log("Modal has been closed.") }}>
                <View style={styles.modal}>
                  <Image
                    style={{ width: '100%', height: '50%', resizeMode: 'stretch' }}
                    source={require('../assets/images/mcdonalds.jpg')}
                  />
                </View>
              </Modal>
            </View>:
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
