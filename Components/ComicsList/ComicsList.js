import React, { PureComponent } from "react";

import { FlatList } from "react-native";

import ComicsCard from "../ComicsCard/ComicsCard";
import MainTitle from "../MainTitle/MainTitle";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

class ComicsList extends PureComponent {
  state = {
    comicsList: [],
    loading: true
  };

  static navigationOptions = {
    title: "List of Comics"
  };

  async componentDidMount() {
    const urlsID = [37, 36, 35, 34, 33, 32, 31];

    let requests = urlsID.map(number =>
      fetch(`https://xkcd.com/${number}/info.0.json`)
    );

    Promise.all(requests)
      .then(responses => responses)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(comicsData =>
        comicsData.forEach(item => {
          this.setState(prevState => ({
            comicsList: [...prevState.comicsList, item],
            loading: false
          }));
        })
      );
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
