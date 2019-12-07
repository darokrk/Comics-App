import React, { PureComponent } from "react";

import { FlatList, ActivityIndicator } from "react-native";

import ComicsCard from "../ComicsCard/ComicsCard";

class ComicsList extends PureComponent {
  state = {
    comicsList: [],
    loading: true
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

  renderItem(data) {
    return <ComicsCard {...data} />;
  }

  render() {
    const { comicsList, loading } = this.state;
    if (!loading) {
      return (
        <FlatList
          data={comicsList}
          renderItem={this.renderItem}
          keyExtractor={item => item.title}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

export default ComicsList;
