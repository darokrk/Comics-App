import React, { PureComponent } from "react";

import { FlatList } from "react-native";

import ComicsCard from "../ComicsCard/ComicsCard";
import MainTitle from "../MainTitle/MainTitle";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

class ComicsList extends PureComponent {
  state = {
    comicsList: [],
    loading: true,
    number: 7,
    mounted: false
  };

  static navigationOptions = {
    title: "List of Comics"
  };

  async componentDidMount() {
    if (this.state.mounted) return;
    try {
      const comicsApiCall = await fetch("https://xkcd.com/37/info.0.json");
      const comics = await comicsApiCall.json();
      this.setState({
        comicsList: [...this.state.comicsList, comics],
        loading: false,
        number: ++this.state.number,
        mounted: true
      });
    } catch (err) {
      console.log("First Error fetching data-----------", err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.number);
    async function getData() {
      try {
        const comicsApiCall = await fetch(
          `https://xkcd.com/${this.state.number}/info.0.json`
        );
        const comics = await comicsApiCall.json();
        await this.setState({
          comicsList: [...this.state.comicsList, comics],
          loading: false,
          number: ++this.state.number
        });
        console.log(this.state.comicsList);
      } catch (err) {
        console.log("Error fetching data-----------", err);
      }
    }
    if (this.state.number >= 7) {
      console.log("stop");
      return;
    } else {
      console.log("dziala");
      getData();
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
