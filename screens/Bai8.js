import React from "react";
import {SectionList,Text,View,StyleSheet,SafeAreaView,} from "react-native";

const Bai8 =  () => {
    return (
      <SafeAreaView>
       
        <SectionList
          sections={groupPeopleByLastName(PEOPLE)}
          keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
          renderSectionHeader={({ section }) => {
            return (
              <View style={styles.sectionHeader}>
               
                <Text>{section.title}</Text>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
               
                <Text style={styles.name}>
                 
                  {item.name.first} {item.name.last}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  row: { paddingHorizontal: 10, paddingVertical: 10 },
  name: { fontSize: 16 },
  separator: { backgroundColor: "rgba(0, 0, 0, 0.5)", height: 1 },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170))",
  },
});
const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = { title: group, data: [item] };
    }
    return accumulator;
  }, {});
  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });
  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
};

const PEOPLE = [
  { name: { title: "Ms", first: "Maeva", last: "Scott" } },
  { name: { title: "Ms", first: "Maëlle", last: "Henry" } },
  { name: { title: "Mr", first: "Mohamoud", last: "Faaij" } },
  { name: { title: "Ms", first: "Maëlle", last: "Juss" } },
  { name: { title: "Mr", first: "Trista", last: "Leono" } },
  { name: { title: "Ms", first: "Raesd", last: "Oyat" } },
  { name: { title: "Mr", first: "Beomat", last: "Roina" } },
  { name: { title: "Ms", first: "Csues", last: "Aiys" } },
  { name: { title: "Mr", first: "Xusne", last: "Daed" } },
  { name: { title: "Ms", first: "Okaie", last: "Vasfs" } },
  { name: { title: "Mr", first: "Ndues", last: "Kiyend" } },
  { name: { title: "Ms", first: "Pedue", last: "Iueb" } },
  { name: { title: "Ms", first: "Wushhd", last: "Quaeea" } },
  { name: { title: "Mr", first: "Juaja", last: "Yaaaah" } },
  { name: { title: "Ms", first: "Custon", last: "Toaie" } },
];

export default Bai8;