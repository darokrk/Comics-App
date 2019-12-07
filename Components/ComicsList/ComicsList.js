import React, { PureComponent } from "react";

import { FlatList, ActivityIndicator } from "react-native";

import ComicsCard from "../ComicsCard/ComicsCard";
import MainTitle from "../MainTitle/MainTitle";

class ComicsList extends PureComponent {
  state = {
    comicsList: [],
    loading: true
  };

  static navigationOptions = {
    title: "List of Comics"
  };

  async componentDidMount() {
    try {
      const comicsApiCall = await fetch("https://xkcd.com/37/info.0.json");
      const comics = await comicsApiCall.json();
      this.setState({
        comicsList: [...this.state.comicsList, comics],
        loading: false
      });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  render() {
    const { comicsList, loading } = this.state;
    const { navigation } = this.props;
    if (!loading) {
      return (
        <>
          <MainTitle text="XKCD" />
          <FlatList
            data={comicsList}
            renderItem={data => (
              <ComicsCard {...data} navigation={navigation} />
            )}
            keyExtractor={item => item.title}
          />
        </>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

export default ComicsList;
